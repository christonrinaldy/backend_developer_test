const secret = process.env.SECRET
const jwt = require('jsonwebtoken')


function authentication(req,res,next){
    try{
        let token =  req.headers.token
        if(!token){
            res.status(400).json({message:'token not found'})
        }
        else{
            const userLogin = jwt.verify(token, secret)
            if(userLogin){
                req.userLogin = userLogin;
                next();
            }else{
                res.status(500).json({message:'not authenticated'})
            }
        }
    }catch(err){
        res.status(500).json({message:err.message})
    }
    

}
module.exports = authentication;