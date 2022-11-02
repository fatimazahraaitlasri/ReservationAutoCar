const express = require('express')
const router = express.Router()
const {registerAdmin,loginAdmin,} = require('../controllers/adminController')

router.post('/register',registerAdmin)
router.post('/login',loginAdmin)  
// router.get('/me',protect,GetMe)


module.exports = router;

