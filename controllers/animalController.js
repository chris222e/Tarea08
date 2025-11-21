const pool = require('../config/db');

// ✅ Obtener todos los animales (con nombre del rescatista)
exports.getAllAnimals = async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT 
        a.*, 
        r.nombre AS nombre_rescatista
      FROM animal a
      LEFT JOIN rescatista r 
        ON a.id_rescatista = r.id_rescatista
      ORDER BY a.id_animal DESC
    `);

    // ✅ Formatear fecha_rescate en formato bonito DD/MM/YYYY
    rows.forEach(a => {
      if (a.fecha_rescate) {
        const fecha = new Date(a.fecha_rescate);
        a.fecha_rescate = fecha.toLocaleDateString('es-PE');
      }
    });

    res.json(rows);
  } catch (error) {
    console.error('❌ Error al obtener animales:', error);
    res.status(500).json({ message: 'Error al obtener animales' });
  }
};


// ✅ Crear un nuevo animal
exports.createAnimal = async (req, res) => {
  try {
    const { nombre, especie, raza, sexo, id_rescatista, fecha_rescate } = req.body;
    const fotografia = req.file ? `/uploads/${req.file.filename}` : null;

    if (!nombre || !especie || !fecha_rescate) {
      return res.status(400).json({ message: 'Faltan campos obligatorios' });
    }

    // ✅ Evita que "" genere undefined
    const rescatistaFinal = id_rescatista && id_rescatista !== "" ? id_rescatista : null;

    const [result] = await pool.query(
      `INSERT INTO animal (nombre, especie, raza, sexo, fecha_rescate, fotografia, id_rescatista)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [nombre, especie, raza || null, sexo || null, fecha_rescate, fotografia, rescatistaFinal]
    );

    res.status(201).json({ message: '✅ Animal registrado correctamente', id: result.insertId });
  } catch (error) {
    console.error('❌ Error al crear animal:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};


// ✅ Eliminar un animal
exports.deleteAnimal = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM animal WHERE id_animal = ?', [id]);
    res.json({ message: '✅ Animal eliminado correctamente' });
  } catch (error) {
    console.error('❌ Error al eliminar animal:', error);
    res.status(500).json({ message: 'Error al eliminar animal' });
  }
};


// ✅ Actualizar animal
exports.updateAnimal = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, especie, raza, sexo, id_rescatista, fecha_rescate } = req.body;
    const fotografia = req.file ? `/uploads/${req.file.filename}` : null;

    if (!nombre || !especie) {
      return res.status(400).json({ message: 'Faltan campos obligatorios' });
    }

    const rescatistaFinal = id_rescatista && id_rescatista !== "" ? id_rescatista : null;

    let query, params;

    if (fotografia) {
      query = `
        UPDATE animal 
        SET nombre=?, especie=?, raza=?, sexo=?, fecha_rescate=?, id_rescatista=?, fotografia=?
        WHERE id_animal=?
      `;
      params = [nombre, especie, raza || null, sexo || null, fecha_rescate, rescatistaFinal, fotografia, id];
    } else {
      query = `
        UPDATE animal 
        SET nombre=?, especie=?, raza=?, sexo=?, fecha_rescate=?, id_rescatista=?
        WHERE id_animal=?
      `;
      params = [nombre, especie, raza || null, sexo || null, fecha_rescate, rescatistaFinal, id];
    }

    await pool.query(query, params);

    res.json({ message: '✅ Mascota actualizada correctamente' });

  } catch (error) {
    console.error('❌ Error al actualizar mascota:', error);
    res.status(500).json({ message: 'Error al actualizar mascota' });
  }
};
