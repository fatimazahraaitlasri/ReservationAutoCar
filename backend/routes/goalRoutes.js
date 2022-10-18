const express = require ('express');
const router = express.Router()
const { getGoals ,setGoal ,updateGoal ,deletGoals} = require('../controllers/goalController')


router.route("/").get(getGoals ).post(setGoal)

router.route("/:id").put(updateGoal).delete(deletGoals )





module.exports = router
