const asyncHAndler = require('express-async-handler')




const getGoals = asyncHAndler( async( req , res)=>{
    res.status(200).json({massage : 'get goals'})
    
})

const setGoal =asyncHAndler( async( req , res)=>{

    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field')

    }
    res.status(200).json({massage : 'setee goal'})
    
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