const pool = require("../connection")

const init = {
  me_ps_save_interval: 5000,
  me_sb_save_interval: 5000,
  aux_dg1_save_interval: 5000,
  aux_dg2_save_interval: 5000, 
  logic_data_save_interval: 5000
}


async function getConfigData() {
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