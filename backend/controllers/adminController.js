const { Admin } = require('mongodb')
const AdminModel = require('../Models/AdminModel')
const asyncHAndler = require('express-async-handler')
const bcrypt = require('bcryptjs')
 

const registerAdmin = asyncHAndler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400).json({
        message : 'please add all fields'  
      })
    //   throw new Error("please add all fields");
    }
    // check if user exists
    const adminExists = await AdminModel.findOne({ email });
    if (adminExists) {
      res.status(400)
      throw new Error("Admin already exists");
    }
    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
  
    //create user
    const Admin = await AdminModel.create({
      name,
      email,
      password: hashedPassword,
    });
    if (Admin) {
      console.log("created");
      res.status(201).json({
        id: Admin.id,
        name: Admin.name,
        email: Admin.email 
      });
    } else {
      res.status(400);
      throw new Error("invalid admin data");
    }
  });



const loginAdmin =asyncHAndler(async(req, res) => {
    const {email , password} = req.body
    // check for user email
    const admin = await AdminModel.findOne({email})
    console.log(bcrypt.compare(password,admin.password))

    if (admin && (await bcrypt.compare(password,admin.password))) {
        res.json({
            id: admin.id,
            name:admin.name,
            email:admin.email,
            // token: generateToken(user.id)

            
        })
    }else
    {
        res.status(400)
        throw new Error('Admin not found')
    
    }
})


  module.exports = {
    loginAdmin,
    registerAdmin
    

} 