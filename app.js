const opcuaClient = require("node-opcua-client");
const endPointUrl = "opc.tcp://192.168.2.191:4334/opcua_server_path"
const pool = require("./connection");


async function configTable(nodeId) {
  return new Promise((resolve, reject) => {
    pool.query(`
      CREATE TABLE IF NOT EXISTS tbl_deneme_cihazi_${nodeId} (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        val VARCHAR(30) NOT NULL,
        updated_at DATETIME default CURRENT_TIMESTAMP
      ) engine=innoDB
    `, err => {
      if (err) return reject(err);
      resolve(true);
    });
  });
}

async function saveData(nodeId, val) {
  return new Promise((resolve, reject) => {
    pool.query(`
      INSERT INTO tbl_deneme_cihazi_${nodeId} (val) VALUES ('${val}')
    `, (err) => {
      if (err) return reject(err);
      resolve(true);
    });
  });
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


    const monitoredItemsList = [];
    for (let i = 1; i <= 200; i++) {      
      monitoredItemsList.push({ nodeId: `ns=1;i=${1000 + i}`, attributeId: opcuaClient.AttributeIds.Value });
      await configTable(1000+i);
    }


    //monitoredNodes is an monitoredItem list
    subscription.monitorItems(
      monitoredItemsList,
      parameters,
      opcuaClient.TimestampsToReturn.Both,
      (err, monitoredItems) => {
        if (err) throw err;
        monitoredItems.on("changed", async function (items, data) {
          let nodeId = items.itemToMonitor.nodeId.value;
          let val = data.value.value;
          console.log("Node ID: ", items.itemToMonitor.nodeId.value, "\t\t", "Node value: ", data.value.value);
          await saveData(nodeId, val);
        });
    });
    

  } catch (error) {
    console.log(error);
  }
}

main();