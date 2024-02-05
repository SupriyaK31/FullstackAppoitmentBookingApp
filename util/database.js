const Sequelize= require('sequelize');

const sequelize = new Sequelize('booking-app', 'root', 'pass_12345', {
    host: 'localhost',
    dialect: 'mysql',
  });

module.exports=sequelize;