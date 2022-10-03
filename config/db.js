
const {Sequelize} = require('sequelize');

//PRD
//const sequelize = new Sequelize('postgres://qnzplkqfqzsoax:abc165e5809111453be46555790860fffaf6c4675336bd81683dc44ce4e85c9a@ec2-35-168-122-84.compute-1.amazonaws.com:5432/dc2h7ffjnivhm2') // Example for postgres

//DEV
const sequelize = new Sequelize('postgres://qnzplkqfqzsoax:abc165e5809111453be46555790860fffaf6c4675336bd81683dc44ce4e85c9a@ec2-35-168-122-84.compute-1.amazonaws.com:5432/dc2h7ffjnivhm2',
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
        console.log('Conexión exitosa a la BD');
    }
    catch(e){
        console.log("no se conecto a la BD", e);
    }
}



module.exports = sequelize;