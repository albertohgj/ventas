
const { DataTypes } = require("sequelize");

const {Sequelize, Datatypes, Op} = require('sequelize');
const sequelize = require('../config/db.js');
const crypto = require('crypto');
const jwt = require('jsonwebtoken'); 


const Category = sequelize.define('CtlgCtgr',{
    ctCt_idCtlgCtgr:{
        type: DataTypes.INTEGER,
        allowNull:false,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },
    ctCt_descripcion:{
        type : DataTypes.CHAR(64),
        allowNull:false,
    },
    ctCt_activo:{
        type : DataTypes.BOOLEAN,
        allowNull:false
    }
}

);

//Category.sync();

module.exports = Category;