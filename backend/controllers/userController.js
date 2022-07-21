const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/userModel');


const getUsers = asyncHandler(async (req, res) =>  
{
    const userExists = await User.find();

    if(userExists) {
        res.status(200).json(
            userExists
        )
    }
})

const registerUser = asyncHandler(async (req,res) => {
    const {name, email, password} = req.body

    //validation 
    if(!name || !email || !password) {
       res.status(400)

       throw new Error('Please include all fields');
    }

    //Find if user already exists
    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(400)
        throw new Error('User already exists');
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt);

    //Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new error('Invalid user data')
    }
});


const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})

    //check if the password match
    if(user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(401)
        throw new Error('Invalid credentials')
    }
});

// @desc Get current user
// @desc /api/users/me
// @desc Private
const getMe = asyncHandler(async (req,res) => {

    const user = {
        id: req.user._id,
        email: req.user.email,
        name: req.user.name,
    }
    res.status(200).json(user);


    res.status(200).json(req.user);
})

// Generate token
const generateToken = (id) => {
    return jwt.sign({id}, `${process.env.JWT_SECRET}`, {
        expiresIn: '30d',
    })
}

module.exports = { 
    registerUser,
    loginUser,
    getMe,
    getUsers,
}