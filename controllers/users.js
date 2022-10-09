const User = require("../models/users");


async function signUp (req, res){
    let body = req.body;
    try{
        const user = await User.create(body);
        const {salt, hash} = User.createPassword(body["usro_password"]);
        user.usro_psswSalt=salt;
        user.usro_psswHash=hash;
        await user.save();
        res.status(201).json(user);
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
    console.log("entre");
    const userUpdate = await User.update(user, {where:{usro_idUsro:id}});
    const  userUpdated = await User.findByPk(id);
    res.status(200).json(userUpdated);
}

async function deleteUser(req, res){
    const id = req.params.id;
    const user = req.body;
    const update = await User.update(user, {where:{usro_idUsro:id}});
    const  userUpdated = await User.findByPk(id);
    res.status(200).json(userUpdated);
}

async function logIn(req, res){
    const body = req.body;
    const user = await User.findOne({where: {usro_nmbrUsro:body["usro_nmbrUsro"]}});
    if(!user){
        return res.status(404).json({error: "usuario no encontrado"});
    }
    console.log(user.usro_psswHash);
    console.log(user.usro_psswSalt); 
    if(User.validatePassword(body["usro_password"], user.usro_psswSalt, user.usro_psswHash)){
        // return res.status(200).json({mensaje:"Bienvenido"});
       return res.status(200).json({
            user:  user.username,
            email: user.email,
            token : User.generateJWT(user)
       });
    }
    else{
        return res.status(400).json({error: "password incorrecto"});
    } 
}

module.exports = {
    signUp, 
    getUsers,
    updateUser,
    deleteUser,
    logIn
    };