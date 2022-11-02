const asyncHAndler = require('express-async-handler')
const  Goal = require('../Models/goalModel')



const getGoals = asyncHAndler( async( req , res)=>{
   const  goals = await Goal.find({})
    res.status(200).json(goals)
    
})

const setGoal =asyncHAndler( async( req , res)=>{

    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field')

    }
    const goal = await Goal.create({
        text: req.body.text
    })
    res.status(200).json(goal)
    
})


const updateGoal = asyncHAndler(async( req , res)=>{
    res.status(200).json({massage : 'update goals'}) 
    
})


const deletGoals = asyncHAndler( async( req , res)=>{
    res.status(200).json({massage : 'delete  goals'})
    
})
module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deletGoals
}