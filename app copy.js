require("dotenv").config();

const opcuaClient = require("node-opcua-client");

const endPointUrl = "opc.tcp://ISLETME37.SCOTTANKER.LOCAL:4334/opcua_server_path"

async function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const client = opcuaClient.OPCUAClient.create({
  applicationName: "DenemeCihazi-1",
  connectionStrategy: {
    initialDelay: 1000,
    maxRetry: 10
  },
  securityMode: opcuaClient.MessageSecurityMode.None,
  securityPolicy: opcuaClient.SecurityPolicy.None,
  endpointMustExist: false
});

const main = async () => {
  try {
    await client.connect(endPointUrl);
    console.log("Connected to the server at ", endPointUrl);

    const session = await client.createSession();
    console.log("session created !");


    /* const browsePath = opcuaClient.makeBrowsePath("RootFolder", "/Objects");
    const result = await session.translateBrowsePath(browsePath);
    console.log(result);
    for (let nodum of result.targets) {
      console.log(nodum.targetId.toString());
    } */


    //const browsePath = await session.makeBrow browse("RootFolder/Objects/DenemeCihazi-1");
    //console.log("references of RootFolder :");
    
    /* for (const reference of browseResult.references) {
      console.log("   -> ", reference.browseName.toString());
    } */

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

    
    const maxAge = 0;
    const nodeToRead = {
      nodeId: "ns=1;i=1001",
      attributeId: opcuaClient.AttributeIds.Value
    };
    const dataValue = await session.read(nodeToRead, maxAge);
    console.log(" Exhaust Temp 1 = ", dataValue.value);

    const nodeToRead2 = {
      nodeId: "ns=1;i=1001",
      attributeId: opcuaClient.AttributeIds.Value
    };
    const dataValue2 = await session.read({
      nodeId: "ns=1;i=1002",
      attributeId: opcuaClient.AttributeIds.Value
    }, maxAge);
    console.log(" Exhaust Temp 2 = ", dataValue2.value);



  } catch (error) {
    console.log(error);
  }
}

main();