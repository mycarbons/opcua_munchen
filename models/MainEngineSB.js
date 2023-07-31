const pool = require("../connection");



async function saveData_me_sb(dataObject){
  return new Promise((resolve, reject) => {
    let arr = [];
    for(let i = 1036; i <= 1070; i++){
      arr.push(dataObject[`val_${i}`]);
    }
    pool.query(`
      INSERT INTO tbl_me_sb (
        val_1036,
        val_1037,
        val_1038,
        val_1039,
        val_1040,
        val_1041,
        val_1042,
        val_1043,
        val_1044,
        val_1045,
        val_1046,
        val_1047,
        val_1048,
        val_1049,
        val_1050,
        val_1051,
        val_1052,
        val_1053,
        val_1054,
        val_1055,
        val_1056,
        val_1057,
        val_1058,
        val_1059,
        val_1060,
        val_1061,
        val_1062,
        val_1063,
        val_1064,
        val_1065,
        val_1066,
        val_1067,
        val_1068,
        val_1069,
        val_1070
      ) VALUES (?)
    `, [arr], err => {
      if (err) reject(err);
      resolve(true);
    });
  });
}


async function configTable_me_sb() {
  return new Promise((resolve, reject) => {
    pool.query(`
      CREATE TABLE IF NOT EXISTS tbl_me_sb (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        val_1036 DOUBLE(5,1) NULL,
        val_1037 DOUBLE(5,1) NULL,
        val_1038 DOUBLE(5,1) NULL,
        val_1039 DOUBLE(5,1) NULL,
        val_1040 DOUBLE(5,1) NULL,
        val_1041 DOUBLE(5,1) NULL,
        val_1042 DOUBLE(5,1) NULL,
        val_1043 DOUBLE(5,1) NULL,
        val_1044 DOUBLE(5,1) NULL,
        val_1045 DOUBLE(5,1) NULL,
        val_1046 DOUBLE(5,1) NULL,
        val_1047 DOUBLE(5,1) NULL,
        val_1048 DOUBLE(5,1) NULL,
        val_1049 DOUBLE(5,1) NULL,
        val_1050 DOUBLE(5,1) NULL,
        val_1051 DOUBLE(7,3) NULL,
        val_1052 DOUBLE(6,2) NULL,
        val_1053 DOUBLE(8,4) NULL,
        val_1054 DOUBLE(6,2) NULL,
        val_1055 DOUBLE(7,3) NULL,
        val_1056 DOUBLE(6,2) NULL,
        val_1057 DOUBLE(8,4) NULL,
        val_1058 DOUBLE(6,2) NULL,
        val_1059 DOUBLE(7,3) NULL,
        val_1060 DOUBLE(7,3) NULL,
        val_1061 DOUBLE(6,2) NULL,
        val_1062 DOUBLE(6,2) NULL,
        val_1063 DOUBLE(8,4) NULL,
        val_1064 DOUBLE(7,3) NULL,
        val_1065 DOUBLE(6,2) NULL,
        val_1066 DOUBLE(5,1) NULL,
        val_1067 DOUBLE(7,3) NULL,
        val_1068 DOUBLE(7,3) NULL,
        val_1069 DOUBLE(5,1) NULL,
        val_1070 DOUBLE(6,2) NULL,
        updated_at DATETIME default CURRENT_TIMESTAMP
      ) engine=MyISAM;
    `, err => {
        if (err) return reject(err);
        resolve(true);
    });
  });
}


module.exports = {
  configTable_me_sb,
  saveData_me_sb
}