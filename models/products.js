
const { DataTypes } = require("sequelize");

const {Sequelize, Datatypes, Op} = require('sequelize');
const sequelize = require('../config/db.js');
const crypto = require('crypto');
const jwt = require('jsonwebtoken'); 


const Product = sequelize.define('CtlgPrdc',{
    ctPr_idCtlgPrdc:{
        type: DataTypes.INTEGER,
        allowNull:false,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },
    ctPr_descripcion:{
        type : DataTypes.CHAR(64),
        allowNull:false,
    },
    ctPr_activo:{
        type : DataTypes.BOOLEAN,
        allowNull:false
    },
    ctPr_idCtlgCtgr:{
        type : DataTypes.INTEGER,
        allowNull:false
    },
    ctPr_costo:{
        type : DataTypes.DECIMAL,
        allowNull:false
    }
}

);

Product.sync();

module.exports = Product;