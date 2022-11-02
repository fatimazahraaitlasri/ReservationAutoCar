const jwt = require('jsonwebtoken')
const bcrypt =require('bcryptjs')
const asyncHAndler = require('express-async-handler')
const User = require('../Models/userModel')
// const userModel = require('../Models/userModel')
// @desc  Autonticate 
// @route  Post/Api/users
// @access Public


const registerUser = asyncHAndler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please add all fields");
  }
  // check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  if (user) {
    console.log("created")
    res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id)
    });
  } else {
    res.status(400);
    throw new Error("invalid user data");
  }
});
// @desc  Autonticate a user 
// @route  Post/Api/users
// @access Public
const loginUser =asyncHAndler(async(req, res) => {
    const {email , password} = req.body
    // check for user email
    const user = await User.findOne({email})
    console.log(bcrypt.compare(password,user.password))

    if (user && (await bcrypt.compare(password,user.password))) {
        res.json({
            id: user.id,
            name:user.name,
            email:user.email,
            token: generateToken(user.id)

            
        })
    }else
    {
        res.status(400)
        throw new Error('invalid user credentials')
    }
})
// @desc  get  user data 
// @route  GET/Api/users/me 
// @access Privat
const GetMe = asyncHAndler(async(req, res) => {
    const {_id,name,email} = await User.findById(req.user.id)
    res.status(200).json({
        di:_id,
        name,
        email,
    })
    res.json({message:'user data display'})

})

// generate Token
 const generateToken = (id) =>{ 
    return jwt.sign({id} ,process.env.JWT_SECRET , {expiresIn:'30d'})
 }

module.exports = {
    registerUser,
    loginUser,
    GetMe

} 