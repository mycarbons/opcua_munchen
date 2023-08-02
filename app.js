require("dotenv").config();
const opcuaClient = require("node-opcua-client");
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const { configTable_me_ps, saveData_me_ps } = require("./models/MainEnginePS");
const { configTable_me_sb, saveData_me_sb } = require("./models/MainEngineSB");
const { configTable_aux_dg, saveData_aux_dg1 } = require("./models/AuxDG1");
const { configTable_aux_dg2, saveData_aux_dg2 } = require("./models/AuxDG2");
const { configTable_logic_data, saveData_logic_data } = require("./models/LogicData");
const configDataPromise = require("./models/ConfigData");



let configData = {};
const dataObject = {}



async function startServer() {
  return new Promise((resolve, reject) => {
    try {
      const app = express();
      const server = http.createServer(app);
      const io = new Server(server, {
        cors: {
          origin: '*'
        }
      });
      const socket_port = configData.socket_port;
      server.listen(socket_port, ()=>{
        console.log(`Server listening the port:${socket_port} for socket connections`);
      });      
      io.sockets.on("connection", (socket) => {
        console.log("Someone connected to socket");
      });
      resolve(io);

    } catch (error) {
      reject(error);
    }
  });
}



async function createClient() {
  return new Promise((resolve, reject) => {
    const endpoint = {
      ip: configData.endpoint_ip,
      port: configData.endpoint_port,
      path: configData.endpoint_path
    }
    const endPointUrl = `opc.tcp://${endpoint.ip}:${endpoint.port}${endpoint.path}`;

    const client = opcuaClient.OPCUAClient.create({
      applicationName: configData.opc_applicationName,
      connectionStrategy: {
        initialDelay: parseInt(configData.opc_initialDelay), //bunun data alım sıklığı ile alakası yok
        maxRetry: parseInt(configData.opc_maxRetry)
      },
      securityMode: opcuaClient.MessageSecurityMode.None,
      securityPolicy: opcuaClient.SecurityPolicy.None,
      endpointMustExist: false
    });
  
    client.connect(endPointUrl).then(()=>{
      console.log("Connected to the server at ", endPointUrl);
      client.on("backoff", (retry, delay) =>
      console.log(
        "still trying to connect to ",
        endPointUrl,
        ": retry =",
        retry,
        "next attempt in ",
        delay / 1000,
        "seconds"
      )
    );
      resolve(client);
    }).catch(err => reject(err));
  });
}



async function createOPCsubscription(io){
  const client = await createClient();    
  const session = await client.createSession();
  console.log("session created !");
  session.on("keepalive", () => {
    console.log("Session is Keep Alive...");
  });
  const monitoredItemsList = [];
  for (let i = 1; i <= 200; i++) {
    monitoredItemsList.push({ nodeId: `ns=1;i=${1000 + i}`, attributeId: opcuaClient.AttributeIds.Value });
    dataObject[`val_${1000+i}`] = null;
  }

  const subscription = opcuaClient.ClientSubscription.create(session, {
    requestedPublishingInterval: configData.opc_requestedPublishingInterval,
    requestedLifetimeCount: configData.opc_requestedLifetimeCount,
    requestedMaxKeepAliveCount: configData.opc_requestedMaxKeepAliveCount,
    maxNotificationsPerPublish: configData.opc_maxNotificationsPerPublish,
    publishingEnabled: true,
    priority: configData.opc_priority
  });

  const parameters = {
    samplingInterval: configData.opc_samplingInterval, //data kontrolü yapma sıklığı
    filter: null,
    discardOldest: true,
    queueSize: configData.opc_queueSize
  }

  subscription.monitorItems(
    monitoredItemsList,
    parameters,
    opcuaClient.TimestampsToReturn.Both,
    (err, monitoredItems) => {
      if (err) throw err;
      monitoredItems.on("changed", function (items, data) {
        let nodeId = items.itemToMonitor.nodeId.value;
        let val = data.value.value;
        dataObject[`val_${nodeId}`] = val/100;
        io.sockets.emit("singleValue", {
          nodeId: nodeId,
          value: val
        });
      });
  });

  setInterval(async () => {
    await saveData_me_ps(dataObject);
    console.log("me_ps_save_interval", "saved");
  }, configData.me_ps_save_interval);

  setInterval(async () => {
    await saveData_me_sb(dataObject);
    console.log("me_sb_save_interval", "saved");
  }, configData.me_sb_save_interval);
  
  setInterval(async () => {
    await saveData_aux_dg1(dataObject);
    console.log("aux_dg1_save_interval", "saved");
  }, configData.aux_dg1_save_interval);
  
  setInterval(async () => {
    await saveData_aux_dg2(dataObject);
    console.log("aux_dg2_save_interval", "saved");
  }, configData.aux_dg2_save_interval);
  
  setInterval(async () => {
    await saveData_logic_data(dataObject);
    console.log("logic_data_save_interval", "saved");
  }, configData.logic_data_save_interval);

}



async function startDataSync(){
  
}



async function main() {
  try {
    configData = await configDataPromise();
    const io = await startServer();
    
    await configTable_me_ps();
    await configTable_me_sb();
    await configTable_aux_dg();
    await configTable_aux_dg2();
    await configTable_logic_data();
    
    createOPCsubscription(io);
    startDataSync();

  } catch (error) {
    console.log(error);
  }
}

main();