const User = require("../models/users");


async function signUp (req, res){
    let body = req.body;
    try{
        const user = await User.create(body);
        const {salt, hash} = User.createPassword(body["usro_password"]);
        user.usro_psswSalt=salt;
        user.usro_psswHash=hash;
        await user.save();
        response.status(201).json(user);
    }catch(error){
        console.log(error);
        return res.status(400).json(error);
    }
}

async function getUsers(req, res){
    const users = await User.findAll({where:{usro_activo:"1"}});
    res.status(200).json(users);
}


async function updateUser(req, res){
    const id=req.params.id;
    const user = req.body;
    const update = await User.update(user, {where:{id}});
    const  userUpdated = await User.findByPk(id);
    res.status(200).json(userUpdated);
}

async function deleteUser(req, res){
    const id = req.params.id;
    const user = req.body;
    const update = await User.update(user, {where:{id}});
    const  userUpdated = await User.findByPk(id);
    res.status(200).json(update);
}

module.exports = {
    signUp, 
    getUsers,
    updateUser,
    deleteUser
    };