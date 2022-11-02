const mongoose  = require ("mongoose")

const tripeSchema = new mongoose.Schema({

    destination : {
        type : String,
        required : [true,'Required fields ']
    },
    arrivalCity :{
        type : String,
        required : [true,'Required fields ']
    },
    price:{
        type : String,
        required : [true,'Required fields ']
    }, 
    
    DepartureTime:{
        type : String,
        required : [true,'Required fields ']
    },  
    
    ArivalDate:{
        type : String,
        required : [true,'Required fields ']
    },
    adminID:{
        type: mongoose.Schema.Types.ObjectId, 
            ref: "Admin" 
    }
});

module.exports = mongoose.model('Trips' ,tripeSchema)
// penitration  crossjob   