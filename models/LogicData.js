const pool = require("../connection");




async function saveData_logic_data(dataObject){
  return new Promise((resolve, reject) => {
    let arr = [];
    for(let i = 1139; i <= 1201; i++){
      arr.push(dataObject[`val_${i}`] % 2 == 1);
    }
    pool.query(`
      INSERT INTO tbl_logic_data (
        val_1139,
        val_1140,
        val_1141,
        val_1142,
        val_1143,
        val_1144,
        val_1145,
        val_1146,
        val_1147,
        val_1148,
        val_1149,
        val_1150,
        val_1151,
        val_1152,
        val_1153,
        val_1154,
        val_1155,
        val_1156,
        val_1157,
        val_1158,
        val_1159,
        val_1160,
        val_1161,
        val_1162,
        val_1163,
        val_1164,
        val_1165,
        val_1166,
        val_1167,
        val_1168,
        val_1169,
        val_1170,
        val_1171,
        val_1172,
        val_1173,
        val_1174,
        val_1175,
        val_1176,
        val_1177,
        val_1178,
        val_1179,
        val_1180,
        val_1181,
        val_1182,
        val_1183,
        val_1184,
        val_1185,
        val_1186,
        val_1187,
        val_1188,
        val_1189,
        val_1190,
        val_1191,
        val_1192,
        val_1193,
        val_1194,
        val_1195,
        val_1196,
        val_1197,
        val_1198,
        val_1199,
        val_1200,
        val_1201
      ) VALUES (?)
    `, [arr], err => {
      if (err) reject(err);
      resolve(true);
    });
  });
}



async function configTable_logic_data() {
    return new Promise((resolve, reject) => {
      pool.query(`
        CREATE TABLE IF NOT EXISTS tbl_logic_data (
          id INT(11) AUTO_INCREMENT PRIMARY KEY,
          val_1139 TINYINT(1) NULL,
          val_1140 TINYINT(1) NULL,
          val_1141 TINYINT(1) NULL,
          val_1142 TINYINT(1) NULL,
          val_1143 TINYINT(1) NULL,
          val_1144 TINYINT(1) NULL,
          val_1145 TINYINT(1) NULL,
          val_1146 TINYINT(1) NULL,
          val_1147 TINYINT(1) NULL,
          val_1148 TINYINT(1) NULL,
          val_1149 TINYINT(1) NULL,
          val_1150 TINYINT(1) NULL,
          val_1151 TINYINT(1) NULL,
          val_1152 TINYINT(1) NULL,
          val_1153 TINYINT(1) NULL,
          val_1154 TINYINT(1) NULL,
          val_1155 TINYINT(1) NULL,
          val_1156 TINYINT(1) NULL,
          val_1157 TINYINT(1) NULL,
          val_1158 TINYINT(1) NULL,
          val_1159 TINYINT(1) NULL,
          val_1160 TINYINT(1) NULL,
          val_1161 TINYINT(1) NULL,
          val_1162 TINYINT(1) NULL,
          val_1163 TINYINT(1) NULL,
          val_1164 TINYINT(1) NULL,
          val_1165 TINYINT(1) NULL,
          val_1166 TINYINT(1) NULL,
          val_1167 TINYINT(1) NULL,
          val_1168 TINYINT(1) NULL,
          val_1169 TINYINT(1) NULL,
          val_1170 TINYINT(1) NULL,
          val_1171 TINYINT(1) NULL,
          val_1172 TINYINT(1) NULL,
          val_1173 TINYINT(1) NULL,
          val_1174 TINYINT(1) NULL,
          val_1175 TINYINT(1) NULL,
          val_1176 TINYINT(1) NULL,
          val_1177 TINYINT(1) NULL,
          val_1178 TINYINT(1) NULL,
          val_1179 TINYINT(1) NULL,
          val_1180 TINYINT(1) NULL,
          val_1181 TINYINT(1) NULL,
          val_1182 TINYINT(1) NULL,
          val_1183 TINYINT(1) NULL,
          val_1184 TINYINT(1) NULL,
          val_1185 TINYINT(1) NULL,
          val_1186 TINYINT(1) NULL,
          val_1187 TINYINT(1) NULL,
          val_1188 TINYINT(1) NULL,
          val_1189 TINYINT(1) NULL,
          val_1190 TINYINT(1) NULL,
          val_1191 TINYINT(1) NULL,
          val_1192 TINYINT(1) NULL,
          val_1193 TINYINT(1) NULL,
          val_1194 TINYINT(1) NULL,
          val_1195 TINYINT(1) NULL,
          val_1196 TINYINT(1) NULL,
          val_1197 TINYINT(1) NULL,
          val_1198 TINYINT(1) NULL,
          val_1199 TINYINT(1) NULL,
          val_1200 TINYINT(1) NULL,
          val_1201 TINYINT(1) NULL,
          updated_at DATETIME default CURRENT_TIMESTAMP
        ) engine=MyISAM;
      `, err => {
        if (err) return reject(err);
        resolve(true);
      });
    });
  }

  module.exports = {
    configTable_logic_data,
    saveData_logic_data
  }