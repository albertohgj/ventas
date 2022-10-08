const {Sale, SaleDet} = require("../models/sales");


async function addSales(req, res){  
    let saleA = req.body;
    try{
       console.log("Entre",saleA);
       const addSale = await Sale.create({Vn_importe:saleA.Vn_importe , Vn_idCtlgMnda:saleA.Vn_idCtlgMnda, Vn_pagado:saleA.Vn_pagado, Vn_idCtlgFrmaPago: saleA.Vn_idCtlgFrmaPago, Vn_activo: saleA.Vn_activo});
       saleA.VnDt_idVenta=addSale.Vn_idVenta;


        const addSaleDet = await SaleDet.create(saleA)
        // addSaleDet.save();
        res.status(201).json(addSaleDet);
    }
    catch(err){
        res.status(401).json(err);
    }
}

async function getSales(req, res){
    const salesAll = await Sale.findAll({where:{Vn_idVenta:"1"}});
    res.status(200).json(salesAll);
}

async function getSale(req, res){
    const id = req.params.id;
    const saleOne = await SaleDet.findAll({where:{VnDt_idVntaDlle:id}});
    res.status(200).json(saleOne);
}


async function cancelSale(req, res){
    const id = req.params.id;
    const sale = req.body;
    const update = await Sale.update(sale, {where:{Vn_idVenta:id}});
    const saleUpdated = await Category.findByPk(id);
    res.status(200).json(saleUpdated);
}

module.exports = {
    addSales,
    getSales,
    getSale,
    cancelSale
    };