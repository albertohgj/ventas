const { DataTypes } = require("sequelize");

const {Sequelize, Datatypes, Op} = require('sequelize');
const sequelize = require('../config/db.js');
const crypto = require('crypto');
const jwt = require('jsonwebtoken'); 
const secret = require('../config/secret');  



const User = sequelize.define('usuarios',{
    usro_idUsro:{
        type: DataTypes.INTEGER,
        allowNull:false,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },
    usro_nmbrUsro:{
        type : DataTypes.CHAR(64),
        allowNull:false,
        unique: true,
        validate:{
            isLowercase: true,
            is: /^[a-zA-Z0-9_-]+$/
        }
    },
    usro_nombre:{
        type : DataTypes.CHAR(64),
        allowNull:false
    },
    usro_idCtlgTipoUsro:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    usro_email:{
        type: DataTypes.CHAR(64),
        allowNull:false,
        unique:true,
        validate:{
            isEmail: true
        },
    },
    usro_usroCrcn:{
        type : DataTypes.INTEGER,
        allowNull:false
    },
    usro_psswHash:{
        type: DataTypes.TEXT
    },
    usro_psswSalt:{
        type:DataTypes.TEXT
    },
    usro_activo:{
        type:DataTypes.INTEGER
    }
},
{
timestamps:false
});


// User.sync();

User.createPassword = function(plaintext){
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(plaintext, salt, 10000, 512 ,"sha512").toString("hex");
    return {salt:salt, hash:hash};
}
User.validatePassword = function (password,user_salt, user_hash){
    const hash = crypto.pbkdf2Sync(password, user_salt, 10000, 512 ,"sha512").toString("hex");
    return (user_hash===hash);
}

User.generateJWT = function(user){
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate()+60);

    return jwt.sign({
        user:user.usro_nmbrUsro,
        userTipo : user.usro_idCtlgTipoUsro,
        exp: parseInt(exp.getTime()/1000)
    }, secret)
}

module.exports = User;