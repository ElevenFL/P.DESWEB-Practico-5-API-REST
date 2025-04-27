const express = require('express');
const productService = require('../Negocio/Servicio');

const router = express.Router();

router.get('/productos', async (req, res) => {
  const products = await productService.getProducts();
  res.json(products);
});

router.post('/productos', async (req, res) => {
  try {
    const newProduct = await productService.addProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/productos/:id', async (req, res) => {
  try {
    const product = await productService.getProductById(parseInt(req.params.id));
    res.json(product);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.put('/productos/:id', async (req, res) => {
  try {
    const updatedProduct = await productService.updateProduct(parseInt(req.params.id), req.body);
    res.json(updatedProduct);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.delete('/productos/:id', async (req, res) => {
  try {
    await productService.deleteProduct(parseInt(req.params.id));
    res.json({ message: 'Producto eliminado' });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
