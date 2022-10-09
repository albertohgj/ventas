
require('dotenv').config();
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL,
{
    logging: false,   //Loging disabled
    dialectOptions: {
        ssl:{
            require:true,
            rejectUnauthorized: false
        } 
    }
});

pruebaConex();
async function pruebaConex(){
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Conexión exitosa a la BD');
    }
    catch(e){
        console.log("no se conecto a la BD", e);
    }
}

module.exports = sequelize;