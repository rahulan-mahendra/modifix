const express = require('express')
const router = express.Router()
const {
  loginUser,
  getOneCustomer,
} = require('../controllers/customerAuthController')
const { protect } = require('../middleware/authMiddleware')

router.get('/me', protect, getOneCustomer)
router.post('/login', loginUser)

module.exports = router
 