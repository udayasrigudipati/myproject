import {Router, Request, Response} from 'express'
import User from '../db/models/Users'

const userRouter = Router()

userRouter.post('/', async(req: Request, res: Response) => {

    try {
        const data = req.body 
        const response = await User.create(data)
        return res.status(200).send({message: "You have successfully signedup"})

    }
    catch {
        return res.status(500).send({message: "error in creating user details"})
    }

})


export default userRouter