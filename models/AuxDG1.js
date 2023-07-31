const pool = require("../connection");


async function saveData_aux_dg1(dataObject){
  return new Promise((resolve, reject) => {
    let arr = [];
    for(let i = 1071; i <= 1106; i++){
      arr.push(dataObject[`val_${i}`]);
    }
    pool.query(`
      INSERT INTO tbl_aux_dg (
        val_1071,
        val_1072,
        val_1073,
        val_1074,
        val_1075,
        val_1076,
        val_1077,
        val_1078,
        val_1079,
        val_1080,
        val_1081,
        val_1082,
        val_1083,
        val_1084,
        val_1085,
        val_1086,
        val_1087,
        val_1088,
        val_1089,
        val_1090,
        val_1091,
        val_1092,
        val_1093,
        val_1094,
        val_1095,
        val_1096,
        val_1097,
        val_1098,
        val_1099,
        val_1100,
        val_1101,
        val_1102,
        val_1103,
        val_1104,
        val_1105,
        val_1106
      ) VALUES (?)
    `, [arr], err => {
      if (err) reject(err);
      resolve(true);
    });
  });
}

async function configTable_aux_dg() {
  return new Promise((resolve, reject) => {
    pool.query(`
      CREATE TABLE IF NOT EXISTS tbl_aux_dg (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        val_1071 DOUBLE(6,2) NULL,
        val_1072 DOUBLE(6,2) NULL,
        val_1073 DOUBLE(6,2) NULL,
        val_1074 DOUBLE(6,2) NULL,
        val_1075 DOUBLE(6,2) NULL,
        val_1076 DOUBLE(6,2) NULL,
        val_1077 DOUBLE(6,2) NULL,
        val_1078 DOUBLE(6,2) NULL,
        val_1079 DOUBLE(6,2) NULL,
        val_1080 DOUBLE(6,2) NULL,
        val_1081 DOUBLE(6,2) NULL,
        val_1082 DOUBLE(6,2) NULL,
        val_1083 DOUBLE(6,2) NULL,
        val_1084 DOUBLE(6,2) NULL,
        val_1085 DOUBLE(6,2) NULL,
        val_1086 DOUBLE(6,2) NULL,
        val_1087 DOUBLE(6,2) NULL,
        val_1088 DOUBLE(6,2) NULL,
        val_1089 DOUBLE(6,2) NULL,
        val_1090 DOUBLE(6,2) NULL,
        val_1091 DOUBLE(6,2) NULL,
        val_1092 DOUBLE(6,2) NULL,
        val_1093 DOUBLE(6,2) NULL,
        val_1094 DOUBLE(6,2) NULL,
        val_1095 DOUBLE(6,2) NULL,
        val_1096 DOUBLE(6,2) NULL,
        val_1097 DOUBLE(6,2) NULL,
        val_1098 DOUBLE(6,2) NULL,
        val_1099 DOUBLE(6,2) NULL,
        val_1100 DOUBLE(6,2) NULL,
        val_1101 DOUBLE(6,2) NULL,
        val_1102 DOUBLE(6,2) NULL,
        val_1103 DOUBLE(6,2) NULL,
        val_1104 DOUBLE(6,2) NULL,
        val_1105 DOUBLE(6,2) NULL,
        val_1106 DOUBLE(6,2) NULL,
        updated_at DATETIME default CURRENT_TIMESTAMP
      ) engine=MyISAM;
    `, err => {
      if (err) return reject(err);
      resolve(true);
    });
  });
}

module.exports = {
  configTable_aux_dg,
  saveData_aux_dg1
}