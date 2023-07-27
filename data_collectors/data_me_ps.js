const { AttributeIds } = require("node-opcua-client");


module.exports = async (session) => {
  return Promise.all([
    session.read({nodeId: "ns=1;i=1001", attributeId: AttributeIds.Value}, maxAge),
    session.read({nodeId: "ns=1;i=1002", attributeId: AttributeIds.Value}, maxAge),
    session.read({nodeId: "ns=1;i=1003", attributeId: AttributeIds.Value}, maxAge),
    session.read({nodeId: "ns=1;i=1004", attributeId: AttributeIds.Value}, maxAge),
    session.read({nodeId: "ns=1;i=1005", attributeId: AttributeIds.Value}, maxAge),
    session.read({nodeId: "ns=1;i=1006", attributeId: AttributeIds.Value}, maxAge),
    session.read({nodeId: "ns=1;i=1007", attributeId: AttributeIds.Value}, maxAge),
    session.read({nodeId: "ns=1;i=1008", attributeId: AttributeIds.Value}, maxAge),
    session.read({nodeId: "ns=1;i=1009", attributeId: AttributeIds.Value}, maxAge),
    session.read({nodeId: "ns=1;i=1010", attributeId: AttributeIds.Value}, maxAge),
    session.read({nodeId: "ns=1;i=1011", attributeId: AttributeIds.Value}, maxAge),
    session.read({nodeId: "ns=1;i=1012", attributeId: AttributeIds.Value}, maxAge),
    session.read({nodeId: "ns=1;i=1013", attributeId: AttributeIds.Value}, maxAge),
    session.read({nodeId: "ns=1;i=1014", attributeId: AttributeIds.Value}, maxAge),
    session.read({nodeId: "ns=1;i=1015", attributeId: AttributeIds.Value}, maxAge),
    session.read({nodeId: "ns=1;i=1016", attributeId: AttributeIds.Value}, maxAge),
    session.read({nodeId: "ns=1;i=1017", attributeId: AttributeIds.Value}, maxAge),
    session.read({nodeId: "ns=1;i=1018", attributeId: AttributeIds.Value}, maxAge),
    session.read({nodeId: "ns=1;i=1019", attributeId: AttributeIds.Value}, maxAge),
    session.read({nodeId: "ns=1;i=1020", attributeId: AttributeIds.Value}, maxAge),
    session.read({nodeId: "ns=1;i=1021", attributeId: AttributeIds.Value}, maxAge),
    session.read({nodeId: "ns=1;i=1022", attributeId: AttributeIds.Value}, maxAge),
    session.read({nodeId: "ns=1;i=1023", attributeId: AttributeIds.Value}, maxAge),
    session.read({nodeId: "ns=1;i=1024", attributeId: AttributeIds.Value}, maxAge),
    session.read({nodeId: "ns=1;i=1025", attributeId: AttributeIds.Value}, maxAge),
    session.read({nodeId: "ns=1;i=1026", attributeId: AttributeIds.Value}, maxAge),
    session.read({nodeId: "ns=1;i=1027", attributeId: AttributeIds.Value}, maxAge),
    session.read({nodeId: "ns=1;i=1028", attributeId: AttributeIds.Value}, maxAge),
    session.read({nodeId: "ns=1;i=1029", attributeId: AttributeIds.Value}, maxAge),
    session.read({nodeId: "ns=1;i=1030", attributeId: AttributeIds.Value}, maxAge),
    session.read({nodeId: "ns=1;i=1031", attributeId: AttributeIds.Value}, maxAge),
    session.read({nodeId: "ns=1;i=1032", attributeId: AttributeIds.Value}, maxAge),
    session.read({nodeId: "ns=1;i=1033", attributeId: AttributeIds.Value}, maxAge),
    session.read({nodeId: "ns=1;i=1034", attributeId: AttributeIds.Value}, maxAge),
    session.read({nodeId: "ns=1;i=1035", attributeId: AttributeIds.Value}, maxAge)
  ]);
}