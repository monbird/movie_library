const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user-model');
const validateRegisterInput = require('../validation/register');
const validateSignInInput = require('../validation/signin');

createUser = async (req, res) => {
    const body = req.body;

    // Form validation
    const { errors, isValid } = validateRegisterInput(body);

    // Check validation
    if (!isValid) {
        return res.status(400).json({
            sucess: false,
            message: 'User validation failed',
            errors: errors
        });
    }

    await User.findOne({ email: body.email }).then(user => {
        if (user) {
            return res.status(400).json({
                success: false,
                errors: {
                    email: "Email already exists"
                }
            });
        } else {
            const user = new User(body);

            // Hash password before saving in database
            bcrypt.genSalt(10, (error, salt) => {
                bcrypt.hash(user.password, salt, (error, hash) => {
                    if (error) throw error;
                    user.password = hash;

                    user.save()
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
                });
            });
        }
    });
}

updateUser = async (req, res) => {
    const body = req.body;

    // Hash password before saving in database
    await bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(body.password, salt, (error, hash) => {
            if (error) throw error;
            body.password = hash;

            User.findOneAndUpdate({_id: req.params.user_id},
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
        });
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

signIn = async (req, res) => {
    // Form validation
    const { errors, isValid } = validateSignInInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json({
            sucess: false,
            message: 'Could not sign in',
            errors: errors
        });
    }

    const email = req.body.email.toLowerCase();
    const password = req.body.password;

    // Find user by email
    User.findOne({ email }).then(user => {
        // Check if user exists
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Could not sign in',
                errors: {
                    email: "Email not found"
                }
            });
        }

        // Check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // User matched
                // Create JWT Payload
                const payload = {
                    id: user.id,
                    username: user.username
                };

                // Sign token
                jwt.sign(
                    payload,
                    process.env.PASSPORT_SECRET,
                    {
                        expiresIn: 30 * 24 * 60 * 60 // 1 month in seconds
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
            } else {
                return res.status(400).json({
                    success: false,
                    message: 'Could not sign in',
                    errors: {
                        password: "Password incorrect"
                    }
                });
            }
        });
    });
}

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUserById,
    getAllUsers,
    signIn
};
