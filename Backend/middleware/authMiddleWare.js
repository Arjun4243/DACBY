
import 'dotenv/config'
import jwt from 'jsonwebtoken'
import userModel from '../model/userModel.js'

const authMiddleWare = (req, res, next) => {
    
    const authHeader  = req.headers['authorization']

    if(!authHeader){
        res.json({
            NotificationShow:true,
            Headline:"Unauthorized",
            Image:"/image/registraction_cross.webp",
            Message:"Please login to Bookmark "
        })
        } else {
            try{
                const token = authHeader.split(" ")[1] //this line convert string to array that i sperated with the help of space and i give access only 1 elment no the 0
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