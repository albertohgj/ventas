
const express = require('express');

const PORT = 3000;

var app = express();
app.use(express.json());

//app.use('/');

app.get('/', (req,res)=> res.send("hola mundo"))

app.listen(PORT, ()=>{
    console.log("Servidor escuchando en el puerto",PORT);
});

