const express = require ('express');
const dotenv = require ('dotenv').config()
const cors = require('cors')
const port = process.env.port || 5000
const app = express()
const colors = require('colors')
const connectDB = require('./config/db')
connectDB()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended : false}))
app.use("/api/goals" ,require('./routes/goalRoutes'))
app.use("/api/users" ,require('./routes/userRoutes'))
app.use("/api/admin" ,require('./routes/adminRoutes')) 
app.use("/api/trips" ,require('./routes/tripRoutes')) 
app.use("/api/reservation" ,require('./routes/ticketRoutes'))    

// run port
app.listen(port ,()=> console.log(`server started on port ${port}`)) 



