const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const Customer = require('../models/customerModel')




// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
  
    if(!email || !password){
        res.status(400).json({ message: 'All credentials are required' })
    }

    // Check for user email
    const user = await User.findOne({ email })

    if(user.active)
    {
        if (user && (await bcrypt.compare(password, user.password)))
        {
            res.json({
                _id: user.id,
                firstname: user.firstname,
                lastname: user.lastname,
                name: user.name,
                email: user.email,
                role: user.role,
                token: generateToken(user._id),
            })
        } else {
            res.status(401).json({ message: 'Invalid credentials' })
            throw new Error('Invalid credentials')
        }
    } else {
        res.status(401).json({ message: 'User is not active. Please contact you system administrator' })
        throw new Error('Invalid credentials')
    }
    
})
  
// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getOneCustomer = asyncHandler(async (req, res) => {
    const id = req.params['id'];

    const customer = await Customer.findById(id).select('-password');

    if (!customer) {
        return res.status(400).json({ message: 'User not found' })
    } else {
        return res.status(201).json(customer);
    } 
})
  
// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d', })
}
  
module.exports = {
    loginUser,
    getOneCustomer,
}
  