const mysql = require("mysql2");

module.exports = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "scottank_opcua_11",
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
});


/* const configTable = async (i) => {  
  let sql = `CREATE TABLE IF NOT EXISTS tbl_deneme_cihazi_${i} (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    val VARCHAR(30) NOT NULL,
    updated_at DATETIME default CURRENT_TIMESTAMP
  ) engine=innoDB`;    
  
  return new Promise((resolve, reject) => {
    if (!i) return reject(false);
    pool.query(sql, (err) => {
      if (err) return reject(err);
      resolve(true);
    });
  });
} */



