const mongoose = require('mongoose')
 const ticketSchema = mongoose.Schema({
    
    idCar:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "car"  
    },

    idTrip :{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Admin"
    },
    UserID:{
        type: mongoose.Schema.Types.ObjectId, 
            ref: "Admin" 
    }


   
},
{
    // timestamps : true
})


module.exports = mongoose.model('Ticket',ticketSchema) 