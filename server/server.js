const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Importer les routes
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const payment = require('./routes/paymentRoute')

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/payment', payment);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Synchroniser les modèles avec la base de données
sequelize.sync().then(() => {
  console.log('Database synced');
}).catch((err) => {
  console.error('Failed to sync database:', err);
});
