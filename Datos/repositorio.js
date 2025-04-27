class ProductRepository {
  constructor() {
    this.products = [];
  }

  getAll() {
    return this.products;
  }

  getById(id) {
    return this.products.find(p => p.id === id);
  }

  create(product) {
    const newProduct = {
      id: Date.now(),
      ...product
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id, productData) {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...productData };
      return this.products[index];
    }
    return null;
  }

  delete(id) {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      return this.products.splice(index, 1)[0];
    }
    return null;
  }
}

module.exports = new ProductRepository();
