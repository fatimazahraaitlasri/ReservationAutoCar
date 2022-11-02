const bcrypt =require('bcryptjs')
const { Console } = require('console')
const asyncHAndler = require('express-async-handler')
const tripModel = require('../Models/tripModel')


const allTrips = asyncHAndler(async(req, res) => {
    const trips= await tripModel.find() 
    console.log(trips); 
    res.status(200).json(trips)
    // res.json({message:'trip data display'})
})
const registerTrip = asyncHAndler(async (req, res) => {
    console.log(req.body)
    const { destination , arrivalCity , price , DepartureTime , ArivalDate} = req.body;
    if (!destination || !arrivalCity || !price || !DepartureTime || !ArivalDate) {
      res.status(400).json({
        message : "please add all fields"
      });
    }
    
    // create trip
    const Trip = await tripModel.create({
        destination,
        arrivalCity,
        price,
        DepartureTime,
        ArivalDate,

    });
    if (Trip) {      
      console.log("created"); 
      res.status(201).json(Trip);
    } else {
      res.status(400);
      throw new Error("invalid trips data"); 
    }
  });


  const updateTrip = asyncHAndler(async( req , res)=>{
    const searchTrip= tripModel.findById(req.params.id)
    if(!searchTrip)
    {
        res.status(400).json({
            message : "trip not found"
          })    
    }  
    const tripUpdated = await  tripModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
 console.log(tripUpdated);
    if (tripUpdated) { 
        console.log('updated') 
         
    }
    res.status(200).json(tripUpdated) 
    
}) 
 
const deleteTrip = ( async (req ,res)=>{
    // const searchTrip= tripModel.findById(req.params.id)
    // if(!searchTrip)
    // {
    //     res.status(400).json({
    //         message : "trip not found"
    //       })    
    // } 
    const test = await tripModel.findByIdAndDelete({_id:req.params.id}) 
     res.status(400).json({id : req.params.id});   
     
})  



module.exports = {
    
    registerTrip,
    allTrips,
    updateTrip,
    deleteTrip
} 
