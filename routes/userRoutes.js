const express=require('express');
const userController=require('../controllers/userController');

const Router=express.Router();

Router.get('/api/users',userController.getAllUser);

Router.post('/api/users', userController.postUser);

Router.delete('/api/users/:id',userController.deleteUser);

Router.put('/api/users/:id', userController.editUser);

module.exports=Router;