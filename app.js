const opcuaClient = require("node-opcua-client");
const endPointUrl = "opc.tcp://216.137.181.212:4334/opcua_server_path"
const {configTable_me_ps, configTable_me_sb, configTable_aux_dg, configTable_aux_dg2, configTable_logic_data} = require("./connection")
const saveMePs = require("./data_collectors/data_me_ps");

async function saveData(session) {
  saveMePs(session).then(values => console.log(values));
  
  /* return new Promise((resolve, reject) => {
    pool.query(`
      INSERT INTO tbl_deneme_cihazi_${nodeId} (val) VALUES ('${val}')
    `, (err) => {
      if (err) return reject(err);
      resolve(true);
    });
  }); */
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

    await configTable_me_ps();
    await configTable_me_sb();
    await configTable_aux_dg();
    await configTable_aux_dg2();
    await configTable_logic_data();


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

    maxAge = 0;
    const itemToMonitor = { nodeId: "ns=1;i=1001", attributeId: opcuaClient.AttributeIds.Value };
    const monitoredItem = opcuaClient.ClientMonitoredItem.create(subscription, itemToMonitor, parameters, opcuaClient.TimestampsToReturn.Both);

    setInterval(async () => {
      //monitoredItem.on("changed", console.log);

      //opcuaClient.ClientMonitoredItemGroup()
      //const valuesArr = await saveData(session);
      //const values = valuesArr.map(el => el.value.value / 100);
      //console.log(values);
    }, 5000);
    

  } catch (error) {
    console.log(error);
  }
}

main();