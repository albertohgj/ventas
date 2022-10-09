const {Sale, SaleDet} = require("../models/sales");


async function addSales(req, res){  
    let saleA = req.body;
    let saleDetalle = req.body.VnDetalle;
    try{
       const addSale = await Sale.create({Vn_importe:saleA.Vn_importe , Vn_idCtlgMnda:saleA.Vn_idCtlgMnda, Vn_pagado:saleA.Vn_pagado, Vn_idCtlgFrmaPago: saleA.Vn_idCtlgFrmaPago, Vn_activo: saleA.Vn_activo});
       saleA.VnDt_idVenta=addSale.Vn_idVenta;

       for(let i=0; i<saleA.VnDetalle.length; i++){
        console.log("Hola3",saleA.VnDetalle[i].VnDt_idCtlgPrdc);
            const addSaleDet = await SaleDet.create({VnDt_idCtlgPrdc:saleA.VnDetalle[i].VnDt_idCtlgPrdc, VnDt_cstoUntr:saleA.VnDetalle[i].VnDt_cstoUntr, VnDt_cantidad:saleA.VnDetalle[i].VnDt_cantidad, VnDt_cstoTotl:saleA.VnDetalle[i].VnDt_cstoTotl,VnDt_activo:saleA.VnDetalle[i].VnDt_activo, VnDt_idVenta:  saleA.VnDt_idVenta })
            addSaleDet.save();
            saleA.VnDetalle[i].VnDt_idVntaDlle=addSaleDet.VnDt_idVntaDlle;

       }
      
        res.status(201).json(saleA);
    }
    catch(err){
        res.status(401).json(err);
    }
}

async function getSales(req, res){
    const salesAll = await Sale.findAll({where:{Vn_activo:"1"}});
    res.status(200).json(salesAll);
}

async function getSale(req, res){
    const id = req.params.id;
    const saleOne = await SaleDet.findAll({where:{VnDt_idVenta:id}});
    res.status(200).json(saleOne);
}


async function cancelSale(req, res){
    const id = req.params.id;
    const sale = req.body;
    const saleUpdated = await Sale.update(sale, {where:{Vn_idVenta:id}});
    const  saleRes = await Sale.findByPk(id);

    res.status(200).json(saleRes);
}

module.exports = {
    addSales,
    getSales,
    getSale,
    cancelSale
    };