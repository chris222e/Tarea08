
```
🐾 Registro de Animales
```
Sistema web básico para registrar, ver, actualizar y eliminar animales rescatados. Incluye subida de fotos y base de datos MySQL.

```
🚀 Tecnologías

Node.js + Express

MySQL

(fotos)
```
📌 Funciones

Registrar animales (con foto)

Ver lista de animales
```
Editar datos

Eliminar registros
```

```
SQL
🗄️ Base de Datos
CREATE TABLE animal (
  id_animal INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  especie VARCHAR(50),
  raza VARCHAR(100),
  sexo VARCHAR(20),
  fecha_rescate DATE,
  fotografia VARCHAR(255)
);
```
SQL

```
▶️ Cómo iniciar
```
npm install
nodemon server.js
```

Servidor en:

http://localhost:3000
