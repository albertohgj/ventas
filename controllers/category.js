const Category = require("../models/category");


async function addCategory(req, res){
    
    let cat = req.body;

    //Category.sync();
    try{
       const add = await Category.create(cat);
         //await add.save();
         res.status(201).json(add);

    }
    catch(err){
        console.log(err);
        res.status(401).json(err);
    }
}

async function getCategories(req, res){
    const categories = await Category.findAll({where:{ctCt_activo:"1"}});
    res.status(200).json(categories);
}


async function updateCategory(req, res){
    const id=req.params.id;
    const category = req.body;
    console.log("****************************");

    const update = await Category.update(category, {where:{ctCt_idCtlgCtgr:id}});
    const categoryUpdated = await Category.findByPk(id);
    res.status(200).json(categoryUpdated);
}

async function deleteCategory(req, res){
    const id = req.params.id;
    const category = req.body;
    const update = await Category.update(category, {where:{ctCt_idCtlgCtgr:id}});
    const  categoryUpdated = await Category.findByPk(id);
    res.status(200).json(categoryUpdated);
}

module.exports = {
    addCategory,
    getCategories,
    updateCategory,
    deleteCategory
    };