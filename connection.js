const mysql = require("mysql2");


const pool = mysql.createPool({
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

async function configTable_me_ps() {
  return new Promise((resolve, reject) => {
    pool.query(`
      CREATE TABLE IF NOT EXISTS tbl_me_ps (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        val_001 DOUBLE(5,1) NULL,
        val_002 DOUBLE(5,1) NULL,
        val_003 DOUBLE(5,1) NULL,
        val_004 DOUBLE(5,1) NULL,
        val_005 DOUBLE(5,1) NULL,
        val_006 DOUBLE(5,1) NULL,
        val_007 DOUBLE(5,1) NULL,
        val_008 DOUBLE(5,1) NULL,
        val_009 DOUBLE(5,1) NULL,
        val_010 DOUBLE(5,1) NULL,
        val_011 DOUBLE(5,1) NULL,
        val_012 DOUBLE(5,1) NULL,
        val_013 DOUBLE(5,1) NULL,
        val_014 DOUBLE(5,1) NULL,
        val_015 DOUBLE(5,1) NULL,
        val_016 DOUBLE(7,3) NULL,
        val_017 DOUBLE(6,2) NULL,
        val_018 DOUBLE(8,4) NULL,
        val_019 DOUBLE(6,2) NULL,
        val_020 DOUBLE(7,3) NULL,
        val_021 DOUBLE(6,2) NULL,
        val_022 DOUBLE(8,4) NULL,
        val_023 DOUBLE(6,2) NULL,
        val_024 DOUBLE(7,3) NULL,
        val_025 DOUBLE(7,3) NULL,
        val_026 DOUBLE(6,2) NULL,
        val_027 DOUBLE(6,2) NULL,
        val_028 DOUBLE(8,4) NULL,
        val_029 DOUBLE(7,3) NULL,
        val_030 DOUBLE(6,2) NULL,
        val_031 DOUBLE(5,1) NULL,
        val_032 DOUBLE(7,3) NULL,
        val_033 DOUBLE(7,3) NULL,
        val_034 DOUBLE(5,1) NULL,
        val_035 DOUBLE(6,2) NULL,
        updated_at DATETIME default CURRENT_TIMESTAMP
      ) engine=MyISAM;
    `, err => {
      if (err) return reject(err);
      resolve(true);
    });
  });
}

async function configTable_me_sb() {
  return new Promise((resolve, reject) => {
    pool.query(`
      CREATE TABLE IF NOT EXISTS tbl_me_sb (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        val_036 DOUBLE(5,1) NULL,
        val_037 DOUBLE(5,1) NULL,
        val_038 DOUBLE(5,1) NULL,
        val_039 DOUBLE(5,1) NULL,
        val_040 DOUBLE(5,1) NULL,
        val_041 DOUBLE(5,1) NULL,
        val_042 DOUBLE(5,1) NULL,
        val_043 DOUBLE(5,1) NULL,
        val_044 DOUBLE(5,1) NULL,
        val_045 DOUBLE(5,1) NULL,
        val_046 DOUBLE(5,1) NULL,
        val_047 DOUBLE(5,1) NULL,
        val_048 DOUBLE(5,1) NULL,
        val_049 DOUBLE(5,1) NULL,
        val_050 DOUBLE(5,1) NULL,
        val_051 DOUBLE(7,3) NULL,
        val_052 DOUBLE(6,2) NULL,
        val_053 DOUBLE(8,4) NULL,
        val_054 DOUBLE(6,2) NULL,
        val_055 DOUBLE(7,3) NULL,
        val_056 DOUBLE(6,2) NULL,
        val_057 DOUBLE(8,4) NULL,
        val_058 DOUBLE(6,2) NULL,
        val_059 DOUBLE(7,3) NULL,
        val_060 DOUBLE(7,3) NULL,
        val_061 DOUBLE(6,2) NULL,
        val_062 DOUBLE(6,2) NULL,
        val_063 DOUBLE(8,4) NULL,
        val_064 DOUBLE(7,3) NULL,
        val_065 DOUBLE(6,2) NULL,
        val_066 DOUBLE(5,1) NULL,
        val_067 DOUBLE(7,3) NULL,
        val_068 DOUBLE(7,3) NULL,
        val_069 DOUBLE(5,1) NULL,
        val_070 DOUBLE(6,2) NULL,
        updated_at DATETIME default CURRENT_TIMESTAMP
      ) engine=MyISAM;
      `, err => {
        if (err) return reject(err);
        resolve(true);
      });
    });
  }

async function configTable_aux_dg() {
  return new Promise((resolve, reject) => {
    pool.query(`
      CREATE TABLE IF NOT EXISTS tbl_aux_dg (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        val_071 DOUBLE(6,2) NULL,
        val_072 DOUBLE(6,2) NULL,
        val_073 DOUBLE(6,2) NULL,
        val_074 DOUBLE(6,2) NULL,
        val_075 DOUBLE(6,2) NULL,
        val_076 DOUBLE(6,2) NULL,
        val_077 DOUBLE(6,2) NULL,
        val_078 DOUBLE(6,2) NULL,
        val_079 DOUBLE(6,2) NULL,
        val_080 DOUBLE(6,2) NULL,
        val_081 DOUBLE(6,2) NULL,
        val_082 DOUBLE(6,2) NULL,
        val_083 DOUBLE(6,2) NULL,
        val_084 DOUBLE(6,2) NULL,
        val_085 DOUBLE(6,2) NULL,
        val_086 DOUBLE(6,2) NULL,
        val_087 DOUBLE(6,2) NULL,
        val_088 DOUBLE(6,2) NULL,
        val_089 DOUBLE(6,2) NULL,
        val_090 DOUBLE(6,2) NULL,
        val_091 DOUBLE(6,2) NULL,
        val_092 DOUBLE(6,2) NULL,
        val_093 DOUBLE(6,2) NULL,
        val_094 DOUBLE(6,2) NULL,
        val_095 DOUBLE(6,2) NULL,
        val_096 DOUBLE(6,2) NULL,
        val_097 DOUBLE(6,2) NULL,
        val_098 DOUBLE(6,2) NULL,
        val_099 DOUBLE(6,2) NULL,
        val_100 DOUBLE(6,2) NULL,
        val_101 DOUBLE(6,2) NULL,
        val_102 DOUBLE(6,2) NULL,
        val_103 DOUBLE(6,2) NULL,
        val_104 DOUBLE(6,2) NULL,
        val_105 DOUBLE(6,2) NULL,
        val_106 DOUBLE(6,2) NULL,
        updated_at DATETIME default CURRENT_TIMESTAMP
      ) engine=MyISAM;
    `, err => {
      if (err) return reject(err);
      resolve(true);
    });
  });
}

async function configTable_aux_dg2() {
  return new Promise((resolve, reject) => {
    pool.query(`
      CREATE TABLE IF NOT EXISTS tbl_aux_dg2 (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        val_107 DOUBLE(6,2) NULL,
        val_108 DOUBLE(6,2) NULL,
        val_109 DOUBLE(6,2) NULL,
        val_110 DOUBLE(6,2) NULL,
        val_111 DOUBLE(6,2) NULL,
        val_112 DOUBLE(6,2) NULL,
        val_113 DOUBLE(6,2) NULL,
        val_114 DOUBLE(6,2) NULL,
        val_115 DOUBLE(6,2) NULL,
        val_116 DOUBLE(6,2) NULL,
        val_117 DOUBLE(6,2) NULL,
        val_118 DOUBLE(6,2) NULL,
        val_119 DOUBLE(6,2) NULL,
        val_120 DOUBLE(6,2) NULL,
        val_121 DOUBLE(6,2) NULL,
        val_122 DOUBLE(6,2) NULL,
        val_123 DOUBLE(6,2) NULL,
        val_124 DOUBLE(6,2) NULL,
        val_125 DOUBLE(6,2) NULL,
        val_126 DOUBLE(6,2) NULL,
        val_127 DOUBLE(6,2) NULL,
        val_128 DOUBLE(6,2) NULL,
        val_129 DOUBLE(6,2) NULL,
        val_130 DOUBLE(6,2) NULL,
        val_131 DOUBLE(6,2) NULL,
        val_132 DOUBLE(6,2) NULL,
        val_133 DOUBLE(6,2) NULL,
        val_134 DOUBLE(6,2) NULL,
        val_135 DOUBLE(6,2) NULL,
        val_136 DOUBLE(6,2) NULL,
        val_137 DOUBLE(6,2) NULL,
        val_138 DOUBLE(6,2) NULL,
        updated_at DATETIME default CURRENT_TIMESTAMP
      ) engine=MyISAM;
    `, err => {
      if (err) return reject(err);
      resolve(true);
    });
  });
}

async function configTable_logic_data() {
  return new Promise((resolve, reject) => {
    pool.query(`
      CREATE TABLE IF NOT EXISTS tbl_logic_data (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        val_139 TINYINT(1) NULL,
        val_140 TINYINT(1) NULL,
        val_141 TINYINT(1) NULL,
        val_142 TINYINT(1) NULL,
        val_143 TINYINT(1) NULL,
        val_144 TINYINT(1) NULL,
        val_145 TINYINT(1) NULL,
        val_146 TINYINT(1) NULL,
        val_147 TINYINT(1) NULL,
        val_148 TINYINT(1) NULL,
        val_149 TINYINT(1) NULL,
        val_150 TINYINT(1) NULL,
        val_151 TINYINT(1) NULL,
        val_152 TINYINT(1) NULL,
        val_153 TINYINT(1) NULL,
        val_154 TINYINT(1) NULL,
        val_155 TINYINT(1) NULL,
        val_156 TINYINT(1) NULL,
        val_157 TINYINT(1) NULL,
        val_158 TINYINT(1) NULL,
        val_159 TINYINT(1) NULL,
        val_160 TINYINT(1) NULL,
        val_161 TINYINT(1) NULL,
        val_162 TINYINT(1) NULL,
        val_163 TINYINT(1) NULL,
        val_164 TINYINT(1) NULL,
        val_165 TINYINT(1) NULL,
        val_166 TINYINT(1) NULL,
        val_167 TINYINT(1) NULL,
        val_168 TINYINT(1) NULL,
        val_169 TINYINT(1) NULL,
        val_170 TINYINT(1) NULL,
        val_171 TINYINT(1) NULL,
        val_172 TINYINT(1) NULL,
        val_173 TINYINT(1) NULL,
        val_174 TINYINT(1) NULL,
        val_175 TINYINT(1) NULL,
        val_176 TINYINT(1) NULL,
        val_177 TINYINT(1) NULL,
        val_178 TINYINT(1) NULL,
        val_179 TINYINT(1) NULL,
        val_180 TINYINT(1) NULL,
        val_181 TINYINT(1) NULL,
        val_182 TINYINT(1) NULL,
        val_183 TINYINT(1) NULL,
        val_184 TINYINT(1) NULL,
        val_185 TINYINT(1) NULL,
        val_186 TINYINT(1) NULL,
        val_187 TINYINT(1) NULL,
        val_188 TINYINT(1) NULL,
        val_189 TINYINT(1) NULL,
        val_190 TINYINT(1) NULL,
        val_191 TINYINT(1) NULL,
        val_192 TINYINT(1) NULL,
        val_193 TINYINT(1) NULL,
        val_194 TINYINT(1) NULL,
        val_195 TINYINT(1) NULL,
        val_196 TINYINT(1) NULL,
        val_197 TINYINT(1) NULL,
        val_198 TINYINT(1) NULL,
        val_199 TINYINT(1) NULL,
        val_200 TINYINT(1) NULL,
        val_201 TINYINT(1) NULL,
        updated_at DATETIME default CURRENT_TIMESTAMP
      ) engine=MyISAM;
    `, err => {
      if (err) return reject(err);
      resolve(true);
    });
  });
}


module.exports = {pool, configTable_me_ps, configTable_me_sb, configTable_aux_dg, configTable_aux_dg2, configTable_logic_data}

