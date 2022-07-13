const secret = process.env.SECRET
const jwt = require('jsonwebtoken')


function authentication(req,res,next){
    try{
        let token =  req.headers.token
        if(!token){
            res.status(401).json({message:"not authorized"})
        }
        else{
            const userLogin = jwt.verify(token, secret)
            if(userLogin){
                req.userLogin = userLogin;
                next();
            }else{
                res.status(401).json({message:"not authorized"})
            }
        }
    }catch(err){
        res.status(401).json({message:"not authorized"})
    }
    

}
module.exports = authentication;