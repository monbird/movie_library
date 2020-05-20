const User = require('../models/user-model');

createUser = async (req, res) => {
    const body = req.body;
    const user = new User(body);

    await user.save()
        .then(() => {
            return res.status(201).json({
                success: true,
                message: 'User created!',
                data: user
            });
        })
        .catch(error => {
            return res.status(400).json({
                success: false,
                message: 'User not created!',
                error
            });
        });
}

updateUser = async (req, res) => {
    const body = req.body;

    await User.findOneAndUpdate({_id: req.params.user_id}, 
        {
            $set: body
        },
        { 
            runValidators: true 
        },
        (error, user) => {
            if (error && error.name == 'ValidationError') {
                return res.status(400).json({
                    success: false,
                    message: 'User not updated!',
                    error
                });
            } else if (error || !user) {
                return res.status(404).json({
                    success: false,
                    message: 'User not found!',
                    error
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'User updated!',
                    data: user
                });
            }
        });
}

deleteUser = async (req, res) => {
    await User.findOneAndDelete({_id: req.params.user_id}, (error, user) => {
        if (error || !user) {
            return res.status(404).json({
                success: false,
                message: "User not found!",
                error
            });
        }

        return res.status(200).json({
            success: true, 
            message: "User deleted!",
            data: user 
        });
    });
}

getUserById = async (req, res) => {
    await User.findOne({_id: req.params.user_id}, (error, user) => {
        if (error || !user) {
            return res.status(404).json({
                success: false, 
                message: "User not found!",
                error
            });
        }

        return res.status(200).json({
            success: true,
            message: "User found!",
            data: user
        });
    });
}

getAllUsers = async (req, res) => {
    await User.find({}, (error, users) => {
        if (error || !users || !users.length) {
            return res.status(404).json({
                success: false, 
                message: 'Users not found!',
                error
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Users found!',
            data: users 
        });
    });
}

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUserById,
    getAllUsers
};
