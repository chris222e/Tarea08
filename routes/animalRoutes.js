const express = require('express');
const router = express.Router();
const multer = require('multer');
const animalController = require('../controllers/animalController');
const path = require('path');
const fs = require('fs');

// Asegurarse de que la carpeta 'public/uploads' exista
const uploadDir = path.join(__dirname, '../public/uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configuración de Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

const upload = multer({ storage });

// Rutas
router.get('/', animalController.getAllAnimals);
router.post('/', upload.single('fotografia'), animalController.createAnimal);
router.delete('/:id', animalController.deleteAnimal);
router.put('/:id', upload.single('fotografia'), animalController.updateAnimal);

module.exports = router;