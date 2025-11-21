const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./config/db');
const animalesRoutes = require('./routes/animalRoutes');
const path = require('path');

const app = express();

// 🧩 Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 📂 Carpetas estáticas
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));
app.use(express.static(path.join(__dirname, 'public')));

// 🐾 Rutas principales
app.use('/animales', animalesRoutes);

// 🌐 Ruta raíz
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// 🔌 Puerto
const PORT = process.env.PORT || 3000;

// 🔍 Verificar conexión a la base de datos
db.getConnection()
  .then(conn => {
    console.log('✅ Conectado a la base de datos MySQL');
    conn.release();
  })
  .catch(err => {
    console.error('❌ Error de conexión a MySQL:', err.message);
  });

// 🚀 Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
