// Ejemplo de conexión con mongoose en Node.js
const mongoose = require('mongoose');
const mongoURL = 'mongodb://admin:admin_password@localhost:27017/admin';

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conectado a MongoDB');
});

module.exports = mongoose.connection;