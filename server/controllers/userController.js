const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Vérifie si l'utilisateur existe déjà
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Création de l'utilisateur
    const user = await User.create({ name, email, password });
    res.status(201).json({ message: 'Utilisateur créé !', user });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Registration failed. Please try again.' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      console.log('User not found');
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log('Mot de passe valide:', isPasswordValid); // Ajoute ce log pour vérifier

    if (!isPasswordValid) {
      console.log('Invalid password');
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user.id }, 'RANDOM_TOKEN_SECRET', { expiresIn: '24h' });
    console.log('Token generated:', token);

    res.status(200).json({ message: 'Connexion réussie', token, user });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'An error occurred during login' });
  }
};



// Fonction d'enregistrement
/*exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Vérifie si l'utilisateur existe déjà
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hachage du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Mot de passe haché:', hashedPassword); // Ajoute ce log pour vérifier
    
    // Création de l'utilisateur
    const user = await User.create({ name, email, password: hashedPassword });
    res.status(201).json(user);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Registration failed. Please try again.' });
  }
};

// Fonction de connexion
exports.login = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      console.log('User not found');
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    console.log('Mot de passe stocké:', user.password); // Ajoute ce log pour vérifier
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log('Mot de passe valide:', isPasswordValid); // Ajoute ce log pour vérifier

    if (!isPasswordValid) {
      console.log('Invalid password');
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
    console.log('Token generated:', token);

    res.status(200).json({ message: 'Connexion réussie', token, user });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'An error occurred during login' });
  }
};*/
