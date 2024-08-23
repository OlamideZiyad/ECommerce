const { Product } = require('../models');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching product' });
  }
};

// Ajouter un nouveau produit
exports.addProduct = async (req, res) => {
  try {
    const { name, description, price, imageUrl } = req.body;

    // Vérifier que tous les champs sont présents
    if (!name || !description || !price || !imageUrl) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Créer le nouveau produit
    const newProduct = await Product.create({ name, description, price, imageUrl });
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ error: 'Error adding product' });
  }
};