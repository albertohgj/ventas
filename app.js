
const express = require('express');
const sequelize = require('./config/db');
const routes = require('./routes');

const PORT = 3000;

var app = express();
app.use(express.json());

app.use('/', routes);

app.get('/', (req,res)=> res.send("hola mundo"));

app.listen(process.env.PORT||PORT, ()=>{
    console.log("Servidor escuchando en el puerto",process.env.PORT||PORT);
});



