# 🐾 Sistema “Hogar Refugio de Animales”

## 📋 Descripción
El proyecto **Hogar RA** es un sistema web diseñado para la gestión de un **refugio de animales**, permitiendo registrar, visualizar y administrar la información de los animales rescatados (como perros y gatos), así como los responsables o adoptantes.  
Su objetivo es brindar una herramienta moderna, ordenada y fácil de usar para apoyar el trabajo de las instituciones que se dedican al rescate y adopción de mascotas.  

---

## ⚙️ Tecnologías Utilizadas
- **Node.js** 🟩  
- **Express.js** (servidor web)  
- **JavaScript (ES6)**  
- **HTML5 & CSS3** (interfaz de usuario)  
- **Base de datos** configurada mediante `config/db.js`  
- **Nodemon** (para desarrollo en caliente)  

---

## 🧩 Estructura del Proyecto
```
hogar_RA/
├── config/
│   └── db.js              # Conexión a la base de datos
├── controllers/
│   └── animalController.js # Lógica principal del módulo de animales
├── public/                 # Archivos estáticos (HTML, CSS, imágenes)
├── server.js               # Punto de entrada del servidor
├── package.json            # Dependencias y scripts
└── .env                    # Variables de entorno
```

---

## 🚀 Instalación y Ejecución
1. Clonar este repositorio:
   ```bash
   git clone 
   cd hogar_RA
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Crear un archivo `.env` con la configuración necesaria:
   ```bash
   PORT=3000
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=
   DB_NAME=hogar_ra
   ```
4. Iniciar el servidor:
   ```bash
   npm start
   ```
   o con **nodemon** (modo desarrollo):
   ```bash
   npm run dev
   ```

---

## 🐶 Funcionalidades Principales
- Registro de animales rescatados (nombre, especie, fecha de rescate, responsable).  
- Listado de mascotas disponibles para adopción.  
- Asignación de responsables o adoptantes.  
- Gestión del refugio desde un panel administrativo.  

---

## 🌱 Futuras Mejoras
- Integración de autenticación de usuarios (administrador y voluntarios).  
- Subida de fotografías de mascotas.  
- Implementación de notificaciones por correo al adoptar.  
- Interfaz moderna con frameworks frontend (React o Vue).  

---

## ❤️ Créditos 
📚 Proyecto académico – *Sistema “Hogar Refugio de Animales”*  
