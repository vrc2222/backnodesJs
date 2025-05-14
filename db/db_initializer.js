const sequelize = require('./db');
const User = require('./models/User');
const bcrypt = require('bcrypt');

async function initializeDatabase() { // async es algo que se ejecuta, y sigue ajecutando las otras lineas de codigo
  try {
    await sequelize.sync({ force: true }); // SOLO usar force: true en desarrollo (forza algun cambio que se hizo)
    console.log('📦 Tablas sincronizadas');
    await createUserAdmin(); //crear datos iniciales o un usuario inicial
    console.log("Well Done!!")
  } catch (error) {
    console.error('Error inicializando la DB:', error);
  }
}

async function createUserAdmin() {
    // Crear usuario maestro
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await User.create({
      username: 'admin',
      password: hashedPassword,
      email: 'admin@example.com',
      identification: '1234'
    });
    console.log('Datos maestros insertados');
}

//Funciones a ser exportadas
module.exports = {
    initializeDatabase
};