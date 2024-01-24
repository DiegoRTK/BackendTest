// Ejemplo de conexión con mongoose en Node.js
const mongoose = require('mongoose');
const mongoURL = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mongodb:${process.env.DB_PORT}`;

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conectado a MongoDB');
});

module.exports = mongoose.connection;