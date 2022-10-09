const Product = require("../models/products");


async function addProduct(req, res){  
    let prd = req.body;
    try{
       const add = await Product.create(prd);
         //await add.save();
         res.status(201).json(add);
    }
    catch(err){
        res.status(401).json(err);
    }
}

async function getProducts(req, res){
    const products = await Product.findAll({where:{ctPr_activo:"1"}});
    res.status(200).json(products);
}


async function updateProduct(req, res){
    const id=req.params.id;
    const product = req.body;
    const update = await Product.update(product, {where:{ctPr_idCtlgPrdc:id}});
    const productUpdated = await Product.findByPk(id);
    res.status(200).json(productUpdated);
}

async function deleteProduct(req, res){
    const id = req.params.id;
    const product = req.body;
    const update = await Product.update(product, {where:{ctPr_idCtlgPrdc:id}});
    const  productUpdated = await Product.findByPk(id);
    res.status(200).json(productUpdated);
}

module.exports = {
    addProduct,
    getProducts,
    updateProduct,
    deleteProduct
    };