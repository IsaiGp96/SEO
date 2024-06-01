const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Ruta para servir archivos estáticos desde la carpeta src y sus subcarpetas
app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
  res.sendFile(path.join(__dirname, 'img', 'venom.png'));

});

app.listen(PORT, () => {
  console.log(`Escuchando`);
});
