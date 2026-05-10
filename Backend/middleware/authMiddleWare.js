
import dotenv from 'dotenv/config'
import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js'

const authMiddleWare = (req, res, next) => {
    
    const authHeader  = req.headers['authorization']

    if(!authHeader){
        res.json({
            NotificationShow:true,
            Headline:"Unauthorized",
            Image:"/image/registraction_cross.webp",
            Message:"Please login to access this resource"
        })
        } else {
            try{
                const token = authHeader.split(" ")[1]
                const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

                req.userId=decoded.userId

                next();
            }
            catch(error){
                console.log(error)
            }
             
        
    }

}

export default authMiddleWare