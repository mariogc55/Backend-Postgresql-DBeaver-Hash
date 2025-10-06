// app.js
const express = require('express');
const config = require('./config');
const cors = require('cors');

// Importar rutas user
const userRoutes = require('./routes/userRoutes');

const app = express();

// Configuración app
app.set('port', config.app.port);
app.use(cors());
app.use(express.json());

// Usar las rutas de usuarios
app.use('/usuarios', userRoutes);

module.exports = app;

