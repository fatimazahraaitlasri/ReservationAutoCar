const jwt = require('jsonwebtoken')
const asyncHAndler = require('express-async-handler')
const User = require('../Models/userModel')
const { error } = require('console')


const httpHandler = function(req ,res ){
    if (req.url === '/' && req.method === 'GET') {
        res.setHeader('Access-Control-Allow-Origin','http://domain-a.localhost:8000')
    }

}

const protect = asyncHAndler(async(req , res , next) => {
    let token 
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try{
        // get token  from header
        token =req.headers.authorization.split(' ')[1]
        // verify token
        const decoded =jwt.verify(token,process.env.JWT_SECRET)

        // GET USER FROM THE Token
        req.user = await User.findById(decoded.id).select('-password')
        next()
    }catch(error)
    {
     console.log(error)  
     res.status(401)
     throw new Error('Not authorized')  
    }
}
if(!token)
{
   res.status(401)
}
})



module.exports ={ protect }