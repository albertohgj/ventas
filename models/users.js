const { DataTypes } = require("sequelize");

const {Sequelize, Datatypes, Op} = require('sequelize');
const sequelize = require('../config/db.js');

const User = sequelize.define('usuarios',{
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
    }
});

module.exports = User;