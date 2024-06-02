const express = require('express');
const path = require('path');
const { body, validationResult } = require('express-validator');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear el cuerpo de la solicitud como JSON
app.use(express.json());

// Ruta para servir archivos estáticos desde las carpetas raíz. 🐧
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/img', express.static(path.join(__dirname, 'img')));
app.use('/src', express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.post('/submit-form', [
  body('nombre').isAlpha('es-ES', { ignore: ' ' }).withMessage('Nombre debe contener solo letras y espacios').isLength({ min: 3 }).withMessage('Nombre debe tener al menos 3 caracteres'),
  body('email').isEmail().withMessage('Por favor ingrese un correo electrónico válido'),
  body('ciudad').isAlpha('es-ES', { ignore: ' ' }).withMessage('Ciudad debe contener solo letras y espacios').isLength({ min: 5 }).withMessage('Ciudad debe tener al menos 5 caracteres'),
  body('edad').isInt({ min: 0, max: 120 }).withMessage('Por favor ingrese una edad válida'),
  body('opinion').notEmpty().withMessage('Por favor escriba su opinión')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Enviar errores al cliente
    return res.status(400).json({ errors: errors.array() });
  }

  // Aquí procesamos el formulario si todo es válido
  res.status(200).json({ message: 'Formulario enviado con éxito' });
});

app.listen(PORT, () => {
  console.log(`Escuchando en http://localhost:${PORT}`);
});
