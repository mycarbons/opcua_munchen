const pool = require("../connection");


async function saveData_aux_dg2(dataObject){
  return new Promise((resolve, reject) => {
    let arr = [];
    for(let i = 1107; i <= 1138; i++){
      arr.push(dataObject[`val_${i}`]);
    }
    pool.query(`
      INSERT INTO tbl_aux_dg2 (
        val_1107,
        val_1108,
        val_1109,
        val_1110,
        val_1111,
        val_1112,
        val_1113,
        val_1114,
        val_1115,
        val_1116,
        val_1117,
        val_1118,
        val_1119,
        val_1120,
        val_1121,
        val_1122,
        val_1123,
        val_1124,
        val_1125,
        val_1126,
        val_1127,
        val_1128,
        val_1129,
        val_1130,
        val_1131,
        val_1132,
        val_1133,
        val_1134,
        val_1135,
        val_1136,
        val_1137,
        val_1138
      ) VALUES (?)
    `, [arr], err => {
      if (err) reject(err);
      resolve(true);
    });
  });
}


async function configTable_aux_dg2() {
  return new Promise((resolve, reject) => {
    pool.query(`
      CREATE TABLE IF NOT EXISTS tbl_aux_dg2 (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        val_1107 DOUBLE(6,2) NULL,
        val_1108 DOUBLE(6,2) NULL,
        val_1109 DOUBLE(6,2) NULL,
        val_1110 DOUBLE(6,2) NULL,
        val_1111 DOUBLE(6,2) NULL,
        val_1112 DOUBLE(6,2) NULL,
        val_1113 DOUBLE(6,2) NULL,
        val_1114 DOUBLE(6,2) NULL,
        val_1115 DOUBLE(6,2) NULL,
        val_1116 DOUBLE(6,2) NULL,
        val_1117 DOUBLE(6,2) NULL,
        val_1118 DOUBLE(6,2) NULL,
        val_1119 DOUBLE(6,2) NULL,
        val_1120 DOUBLE(6,2) NULL,
        val_1121 DOUBLE(6,2) NULL,
        val_1122 DOUBLE(6,2) NULL,
        val_1123 DOUBLE(6,2) NULL,
        val_1124 DOUBLE(6,2) NULL,
        val_1125 DOUBLE(6,2) NULL,
        val_1126 DOUBLE(6,2) NULL,
        val_1127 DOUBLE(6,2) NULL,
        val_1128 DOUBLE(6,2) NULL,
        val_1129 DOUBLE(6,2) NULL,
        val_1130 DOUBLE(6,2) NULL,
        val_1131 DOUBLE(6,2) NULL,
        val_1132 DOUBLE(6,2) NULL,
        val_1133 DOUBLE(6,2) NULL,
        val_1134 DOUBLE(6,2) NULL,
        val_1135 DOUBLE(6,2) NULL,
        val_1136 DOUBLE(6,2) NULL,
        val_1137 DOUBLE(6,2) NULL,
        val_1138 DOUBLE(6,2) NULL,
        updated_at DATETIME default CURRENT_TIMESTAMP
      ) engine=MyISAM;
    `, err => {
      if (err) return reject(err);
      resolve(true);
    });
  });
}

module.exports = {
  configTable_aux_dg2,
  saveData_aux_dg2
}