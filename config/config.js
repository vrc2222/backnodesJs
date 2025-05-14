require('dotenv').config(); // Carga las variables del .env

const config = {
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  },
  jwt: {
    secret: process.env.JWT_SECRET, //token por 1h
    expiresIn: '1h'
  }
};

module.exports = config;