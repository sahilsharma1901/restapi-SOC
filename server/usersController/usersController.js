
const userModel = require("../model/userModel");

const getUsers = async (req, res, next) => {
    const users = await userModel.find().exec();
    res.json({users});
}

const postUser = async (req, res, next) => {
    const { name, age, rollNumber, standard, school } = req.body;

    const user = new userModel({
        name,
        age,
        rollNumber,
        standard,
        school,
    });
    const result = await user.save();
    res.json({result});
}

const updateUser = async (req, res, next) => {
    const id = req.params.userId;

    const { name, age, rollNumber, standard, school } = req.body;

    const user = await userModel.findById(id);
    
    user.name = name;
    user.age = age;
    user.standard = standard;
    user.rollNumber = rollNumber;
    user.school = school;

    const result = await user.save();
    res.json({result});
}

const deleteUser = async (req, res, next) => {
    const id = req.params.userId;

    const user = await userModel.findById(id);
    await user.remove();

    res.json({message: "User Deleted"});
}

exports.getUsers = getUsers;
exports.postUser = postUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;