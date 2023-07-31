const opcuaClient = require("node-opcua-client");
const endPointUrl = "opc.tcp://216.137.181.212:4334/opcua_server_path"
const { configTable_me_ps, saveData_me_ps } = require("./models/MainEnginePS");
const { configTable_me_sb, saveData_me_sb } = require("./models/MainEngineSB");
const { configTable_aux_dg, saveData_aux_dg1 } = require("./models/AuxDG1");
const { configTable_aux_dg2, saveData_aux_dg2 } = require("./models/AuxDG2");
const { configTable_logic_data, saveData_logic_data } = require("./models/LogicData");
const configDataPromise = require("./models/ConfigData");

const dataObject = {}


const main = async () => {

  const configData = await configDataPromise();
  
  try {
    const client = opcuaClient.OPCUAClient.create({
      applicationName: "DenemeCihazi-1",
      connectionStrategy: {
        initialDelay: 1000, //bunun data alım sıklığı ile alakası yok
        maxRetry: 10
      },
      securityMode: opcuaClient.MessageSecurityMode.None,
      securityPolicy: opcuaClient.SecurityPolicy.None,
      endpointMustExist: false
    });

    await client.connect(endPointUrl);
    console.log("Connected to the server at ", endPointUrl);

    const session = await client.createSession();
    console.log("session created !");
    session.on("keepalive", () => {
      console.log("Session is Keep Alive...");
    })

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

    await configTable_me_ps();
    await configTable_me_sb();
    await configTable_aux_dg();
    await configTable_aux_dg2();
    await configTable_logic_data();


    const monitoredItemsList = [];
    for (let i = 1; i <= 200; i++) {      
      monitoredItemsList.push({ nodeId: `ns=1;i=${1000 + i}`, attributeId: opcuaClient.AttributeIds.Value });
      dataObject[`val_${1000+i}`] = null;
    }

    const subscription = opcuaClient.ClientSubscription.create(session, {
      requestedPublishingInterval: 100,
      requestedLifetimeCount: 100,
      requestedMaxKeepAliveCount: 10,
      maxNotificationsPerPublish: 100,
      publishingEnabled: true,
      priority: 10
    });

    const parameters = {
      samplingInterval: 500, //data kontrolü yapma sıklığı
      filter: null,
      discardOldest: true,
      queueSize: 10
    }

    subscription.monitorItems(
      monitoredItemsList,
      parameters,
      opcuaClient.TimestampsToReturn.Both,
      (err, monitoredItems) => {
        if (err) throw err;
        monitoredItems.on("changed", async function (items, data) {
          let nodeId = items.itemToMonitor.nodeId.value;
          let val = data.value.value;
          dataObject[`val_${nodeId}`] = val/100;
          //console.log("Node ID: ", items.itemToMonitor.nodeId.value, "\t\t", "Node value: ", data.value.value);
        });
    });

    setInterval(async () => {
      await saveData_me_ps(dataObject);
      console.log("me_ps_save_interval", "saved");
    }, parseInt(configData.me_ps_save_interval) || 5000);

    setInterval(async () => {
      await saveData_me_sb(dataObject);
      console.log("me_sb_save_interval", "saved");
    }, parseInt(configData.me_sb_save_interval) || 5000);
    
    setInterval(async () => {
      await saveData_aux_dg1(dataObject);
      console.log("aux_dg1_save_interval", "saved");
    }, parseInt(configData.aux_dg1_save_interval) || 5000);
    
    setInterval(async () => {
      await saveData_aux_dg2(dataObject);
      console.log("aux_dg2_save_interval", "saved");
    }, parseInt(configData.aux_dg2_save_interval) || 5000);
    
    setInterval(async () => {
      await saveData_logic_data(dataObject);
      console.log("logic_data_save_interval", "saved");
    }, parseInt(configData.logic_data_save_interval) || 5000);
    

  } catch (error) {
    console.log(error);
  }
}

main();