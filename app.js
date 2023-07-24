require("dotenv").config();

const opcuaClient = require("node-opcua-client");

const endPointUrl = "opc.tcp://ISLETME37.SCOTTANKER.LOCAL:4334/opcua_server_path"

async function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



const main = async () => {
  
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

    const exhTemp1Mon = {
      nodeId: "ns=1;i=1001",
      attributeId: opcuaClient.AttributeIds.Value
    };

    /* const exhTemp1Sub = await subscription.monitor(
      exhTemp1Mon,
      parameters,
      opcuaClient.TimestampsToReturn.Both
    ); */

    const exhTemp2Mon = {
      nodeId: "ns=1;i=1002",
      attributeId: opcuaClient.AttributeIds.Value
    };
    /* const exhTemp2Sub = await subscription.monitor(
      exhTemp2Mon,
      parameters,
      opcuaClient.TimestampsToReturn.Both
    ); */

    /* exhTemp1Sub.on("started", () => {
      console.log("Exhaust Temp 1 is monitoring now...");
    }).on("changed", value => {
      console.log("Exhaust Temp 1 is", value.value.value);
    });
    
    exhTemp2Sub.on("started", () => {
      console.log("Exhaust Temp 2 is monitoring now...");
    }).on("changed", value => {
      console.log("Exhaust Temp 2 is", value.value.value);
    }); */
    

     //monitoredNodes is an monitoredItem list
    subscription.monitorItems([
      exhTemp1Mon,
      exhTemp2Mon
    ], parameters, opcuaClient.TimestampsToReturn.Both, (err, monitoredItems) => {
      monitoredItems.on("changed", function (items,data) {
        console.log("Node ID: ", items.itemToMonitor.nodeId.value);
        console.log("Node value: ", data.value.value);
      });
    });
    

  } catch (error) {
    console.log(error);
  }
}

main();