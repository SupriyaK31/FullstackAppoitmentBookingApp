const { Sequelize, DataTypes } = require('sequelize');
const sequelize=require('../util/database');

const User = sequelize.define('User', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
  name: {
    type: DataTypes.STRING,
  },
  email:{
    type: DataTypes.STRING,
  },
  phone:{
    type: DataTypes.STRING,
  }
  // Add other fields as needed
});

module.exports=User;