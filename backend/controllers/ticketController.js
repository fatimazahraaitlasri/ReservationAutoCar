const bcrypt =require('bcryptjs')    
const { Console } = require('console')    
const asyncHAndler = require('express-async-handler')     
const ticketModel = require('../Models/ticketModel')               



const registerReservation  = asyncHAndler(async (req, res) => {
    const Reservation = await ticketModel.create({
        idCar,
        idTrip,
        UserID
 });
    if (Reservation) {      
      console.log("created"); 
      res.status(201).json(Trip);
    } else {
      res.status(400);
      throw new Error("invalid trips data"); 
    }
  });






module.exports = {
    registerReservation,
}
