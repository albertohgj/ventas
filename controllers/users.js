const User = require("../models/users");


async function signUp (req, res){
    let body = req.body;
    try{
        const user = await User.create(body);
        await user.save();
        response.status(201).json(user);
    }catch(error){
        console.log(error);
        return res.status(400).json(error);
    }
}

async function getUsers(req, res){
    const users = await User.findAll();
    res.status(200).json(users);
}

module.exports = {signUp, getUsers};