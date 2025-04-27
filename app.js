const express = require('express');
const productRoutes = require('./Front/controlador');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/', productRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
