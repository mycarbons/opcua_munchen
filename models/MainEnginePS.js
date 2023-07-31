const pool = require("../connection");


async function saveData_me_ps(dataObject){
  return new Promise((resolve, reject) => {
    let arr = [];
    for(let i = 1001; i <= 1035; i++){
      arr.push(dataObject[`val_${i}`]);
    }
    pool.query(`
      INSERT INTO tbl_me_ps (
        val_1001,
        val_1002,
        val_1003,
        val_1004,
        val_1005,
        val_1006,
        val_1007,
        val_1008,
        val_1009,
        val_1010,
        val_1011,
        val_1012,
        val_1013,
        val_1014,
        val_1015,
        val_1016,
        val_1017,
        val_1018,
        val_1019,
        val_1020,
        val_1021,
        val_1022,
        val_1023,
        val_1024,
        val_1025,
        val_1026,
        val_1027,
        val_1028,
        val_1029,
        val_1030,
        val_1031,
        val_1032,
        val_1033,
        val_1034,
        val_1035
      ) VALUES (?)
    `, [arr], err => {
      if (err) reject(err);
      resolve(true);
    });
  });
}


async function configTable_me_ps() {
    return new Promise((resolve, reject) => {
      pool.query(`
        CREATE TABLE IF NOT EXISTS tbl_me_ps (
          id INT(11) AUTO_INCREMENT PRIMARY KEY,
          val_1001 DOUBLE(5,1) NULL,
          val_1002 DOUBLE(5,1) NULL,
          val_1003 DOUBLE(5,1) NULL,
          val_1004 DOUBLE(5,1) NULL,
          val_1005 DOUBLE(5,1) NULL,
          val_1006 DOUBLE(5,1) NULL,
          val_1007 DOUBLE(5,1) NULL,
          val_1008 DOUBLE(5,1) NULL,
          val_1009 DOUBLE(5,1) NULL,
          val_1010 DOUBLE(5,1) NULL,
          val_1011 DOUBLE(5,1) NULL,
          val_1012 DOUBLE(5,1) NULL,
          val_1013 DOUBLE(5,1) NULL,
          val_1014 DOUBLE(5,1) NULL,
          val_1015 DOUBLE(5,1) NULL,
          val_1016 DOUBLE(7,3) NULL,
          val_1017 DOUBLE(6,2) NULL,
          val_1018 DOUBLE(8,4) NULL,
          val_1019 DOUBLE(6,2) NULL,
          val_1020 DOUBLE(7,3) NULL,
          val_1021 DOUBLE(6,2) NULL,
          val_1022 DOUBLE(8,4) NULL,
          val_1023 DOUBLE(6,2) NULL,
          val_1024 DOUBLE(7,3) NULL,
          val_1025 DOUBLE(7,3) NULL,
          val_1026 DOUBLE(6,2) NULL,
          val_1027 DOUBLE(6,2) NULL,
          val_1028 DOUBLE(8,4) NULL,
          val_1029 DOUBLE(7,3) NULL,
          val_1030 DOUBLE(6,2) NULL,
          val_1031 DOUBLE(5,1) NULL,
          val_1032 DOUBLE(7,3) NULL,
          val_1033 DOUBLE(7,3) NULL,
          val_1034 DOUBLE(5,1) NULL,
          val_1035 DOUBLE(6,2) NULL,
          updated_at DATETIME default CURRENT_TIMESTAMP
        ) engine=MyISAM;
      `, err => {
        if (err) return reject(err);
        resolve(true);
      });
    });
  }


  module.exports = {
    configTable_me_ps,
    saveData_me_ps
  }