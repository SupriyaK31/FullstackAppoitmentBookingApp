const express=require('express');
const User=require('../models/userModel');

exports.getAllUser=async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  exports.postUser=async (req, res) => {
    try {
      const name=req.body.name;
      const email=req.body.email;
      const phone=req.body.phone;
        const user=await User.create({
            name:name,
            email:email,
            phone:phone
        });
        res.status(201).json({newUser:user});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  exports.deleteUser= async (req, res) => {
    const userId = req.params.id;
  
    try {
      const user = await User.findByPk(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      await user.destroy();
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  exports.editUser=async (req, res) => {
    const userId = req.params.id;
    const { name, email, phone } = req.body;
   console.log(userId)
    try {
      const user = await User.findByPk(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      user.name = name || user.name;
      user.email = email || user.email;
      user.phone = phone || user.phone;
  
      await user.save();
  
      res.json({ message: 'User updated successfully', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };