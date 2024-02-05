const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize=require('./util/database');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
const User=require('./models/userModel');
const userRoute=require('./routes/userRoutes');


app.use(userRoute);

app.use(express.static('public'));
sequelize.sync().then(()=>{
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
})

