const pool = require("../connection")

const init = {
  me_ps_save_interval: 5000,
  me_sb_save_interval: 5000,
  aux_dg1_save_interval: 5000,
  aux_dg2_save_interval: 5000, 
  logic_data_save_interval: 5000,
  endpoint_ip: "216.137.181.212",
  endpoint_port: 4334,
  endpoint_path: "/opcua_server_path",
  socket_port: 3700,
  opc_applicationName: "DenemeCihazi-1",
  opc_initialDelay: 1000,
  opc_maxRetry: 10,
  opc_requestedPublishingInterval: 100,
  opc_requestedLifetimeCount: 100,
  opc_requestedMaxKeepAliveCount: 10,
  opc_maxNotificationsPerPublish: 100,
  opc_priority: 10,
  //opc_publishingEnabled: true
  opc_samplingInterval:500,
  opc_queueSize:10
}

async function configData(){
  return new Promise((resolve, reject) => {
    pool.query(`CREATE TABLE IF NOT EXISTS tbl_config (
      me_ps_save_interval VARCHAR(100) NOT NULL,
      me_sb_save_interval VARCHAR(100) NOT NULL,
      aux_dg1_save_interval VARCHAR(100) NOT NULL,
      aux_dg2_save_interval VARCHAR(100) NOT NULL,
      logic_data_save_interval VARCHAR(100) NOT NULL,
      endpoint_ip VARCHAR(100) NOT NULL,
      endpoint_port VARCHAR(100) NOT NULL,
      endpoint_path VARCHAR(100) NOT NULL,
      socket_port VARCHAR(100) NOT NULL,
      opc_applicationName VARCHAR(100) NOT NULL,
      opc_initialDelay VARCHAR(100) NOT NULL,
      opc_maxRetry VARCHAR(100) NOT NULL,
      opc_requestedPublishingInterval VARCHAR(100) NOT NULL,
      opc_requestedLifetimeCount VARCHAR(100) NOT NULL,
      opc_requestedMaxKeepAliveCount VARCHAR(100) NOT NULL,
      opc_maxNotificationsPerPublish VARCHAR(100) NOT NULL,
      opc_priority VARCHAR(100) NOT NULL,
      opc_samplingInterval VARCHAR(100) NOT NULL,
      opc_queueSize VARCHAR(100) NOT NULL
    )`, (err) => {
      if (err) return reject(err);
      resolve(true);
    });
  });
}


async function getConfigData() {
  await configData();
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM tbl_config`, (err, result) => {
      if (err) {
        console.log(err);
      }else{
        result.forEach(el => {
          if (el.name in init) init[el.name] = el.value;
        });
      }
      resolve(init);
    });
  })
}


module.exports = getConfigData;