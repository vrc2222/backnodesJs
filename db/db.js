const { Sequelize } = require('sequelize'); 
const config = require('../config/config'); //trae los datos del env que estan en config

const sequelize = new Sequelize(
  config.db.name,
  config.db.user,
  config.db.password,
  {
    host: config.db.host,
    port: config.db.port,
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: {  //Certificado de seguridad
        require: true,
        rejectUnauthorized: false // ⚠️ usar false solo en desarrollo o si el certificado no es verificado
      }
    }
  }
);

module.exports = sequelize;