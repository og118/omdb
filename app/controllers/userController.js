const User = require("../models/user");

exports.getUsers = async (req, res, next) => {
    const users = await User.find();
    res.status(200).json({
        status: "success",
        data: users
    });
};

exports.getUserById = async (req, res, next) => {
    const userId = req.params.id
    
    const user = await User.findById(userId);
    res.status(200).json({
        status: "success",
        data: user
    });
};

exports.createUser = async (req, res, next) => {
    const user = await User.create(req.body)
    res.status(200).json({
        status: "success",
        data: user
    })
}

exports.patchUser = async (req, res, next) => {
    const userId = req.params.id;

    const user = await User.findByIdAndUpdate(userId, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        status: "success",
        data: user
    });
}

exports.deleteUser = async (req, res, next) => {
    const userId = req.params.id;

    await User.findByIdAndDelete(userId)

    res.status(200).json({
        status: "success",
    });
}
