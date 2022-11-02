 const express = require('express') 
const router = express.Router()
const {registerTrip,allTrips,updateTrip,deleteTrip} = require('../controllers/tripController')


router.get('/' , allTrips)  
router.post('/registerTrip',registerTrip) 
router.put('/update/:id' ,updateTrip) 
// router.route('/update/:id').put(updateTrip)  
router.delete('/delete/:id' , deleteTrip)    

module.exports = router      
