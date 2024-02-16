// controllers/userControllers.js
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const User = require('../models/User');
// const crypto = require('crypto');


const userController = {
  registerUser: async (req, res) => {
    try {
      const { name, email, password,address,contact } = req.body;

    
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User with this email already exists' });
      }

  
      const hashedPassword = await bcrypt.hash(password, 10);


      const newUser = new User({ name, email, password: hashedPassword, address, contact });
      await newUser.save();

      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;

   
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }



      res.status(200).json({ user });
    } catch (error) {
      console.error('Error logging in user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  getUser: async (req, res) => {
    try{
      const id = req.params.id;

      const user = await User.findById( id );
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      res.status(200).json({ user });
    }
    catch(error){
      console.error('Error fetching user data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  editUser: async (req, res) => {
    try{
      const id = req.params.id;
      const updateduser = await User.findByIdAndUpdate(id, req.body, {
        new:true
      })
      res.status(200).json({ updateduser });
    }
    catch(error){
      console.error('Error editing user data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  deleteUser: async (req, res) => {
    try{
      const id = req.params.id;
      const deletedUser = await User.findByIdAndDelete(id)
      res.status(200).json({ deletedUser });
    }
    catch(error){
      console.error('Error deleting user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
  
};

module.exports = userController;
