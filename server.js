const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const db = require('./config/db');
const userRoutes = require('./routes/users');
const quesRoutes = require('./routes/ques');


const PORT = process.env.PORT || 3000; 

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/ques', quesRoutes);


db().then(() => {
  console.log('Connected to MongoDB');

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch(error => {
  console.error('Error connecting to MongoDB:', error);
});


app.get('/', (req, res) => {
  res.send('Welcome to the Online Driving Assessment and Licensing System API');
});
