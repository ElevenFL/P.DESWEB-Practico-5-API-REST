const productRepository = require('../Datos/repositorio');

class ProductService {
  async getProducts() {
    return await productRepository.getAll();
  }

  async getProductById(id) {
    const product = await productRepository.getById(id);
    if (!product) {
      throw new Error('Producto no encontrado');
    }
    return product;
  }

  async addProduct(productData) {
    if (!productData.name || !productData.price) {
      throw new Error('Nombre y precio son requeridos');
    }
    
    return await productRepository.create({
      name: productData.name,
      price: parseFloat(productData.price)
    });
  }

  async updateProduct(id, productData) {
    const updatedProduct = await productRepository.update(id, productData);
    if (!updatedProduct) {
      throw new Error('Producto no encontrado');
    }
    return updatedProduct;
  }

  async deleteProduct(id) {
    const deletedProduct = await productRepository.delete(id);
    if (!deletedProduct) {
      throw new Error('Producto no encontrado');
    }
    return deletedProduct;
  }
}

module.exports = new ProductService();
