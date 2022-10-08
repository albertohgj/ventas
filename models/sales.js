
const { DataTypes, DECIMAL } = require("sequelize");

const {Sequelize, Datatypes, Op} = require('sequelize');
const sequelize = require('../config/db.js');
const crypto = require('crypto');
const jwt = require('jsonwebtoken'); 


const Sale = sequelize.define('Venta',{
    Vn_idVenta:{
        type: DataTypes.INTEGER,
        allowNull:false,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },
    Vn_importe:{
        type : DataTypes.DECIMAL,
        allowNull:false,
    },
    Vn_idCtlgMnda:{
        type : DataTypes.INTEGER,
        allowNull:false,
    },
    Vn_pagado:{
        type : DataTypes.INTEGER,
        allowNull:false,
    },
    Vn_idCtlgFrmaPago:{
        type : DataTypes.INTEGER,
        allowNull:false,
    },
    Vn_activo:{
        type : DataTypes.BOOLEAN,
        allowNull:false
    }
}
);


const SaleDet = sequelize.define('VntaDtll',{
    VnDt_idVntaDlle:{
        type: DataTypes.INTEGER,
        allowNull:false,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },
    VnDt_idVenta:{
        type : DataTypes.INTEGER,
        allowNull:false,
    },
    VnDt_idCtlgPrdc:{
        type : DataTypes.INTEGER,
        allowNull:false,
    },

    VnDt_cstoUntr:{
        type : DataTypes.DECIMAL,
        allowNull:false,
    },
    VnDt_cantidad:{
        type : DataTypes.INTEGER,
        allowNull:false,
    },
    VnDt_cstoTotl:{
        type : DataTypes.DECIMAL,
        allowNull:false,
    },
    VnDt_activo:{
        type : DataTypes.BOOLEAN,
        allowNull:false
    }
});

//Sale.hasMany(SaleDet);
//SaleDet.hasOne(Sale);

//Sale.sync();
//SaleDet.sync()
module.exports = {Sale, SaleDet};
