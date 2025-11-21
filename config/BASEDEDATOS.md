```
SQL
CREATE DATABASE hogar_ra;
USE hogar_ra;

-- Tabla principal de animales
CREATE TABLE animal (
    id_animal INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    especie ENUM('Perro', 'Gato') NOT NULL,
    raza VARCHAR(100),
    sexo ENUM('Macho', 'Hembra'),
    fecha_rescate DATE NOT NULL,
    fotografia VARCHAR(250)
);

```