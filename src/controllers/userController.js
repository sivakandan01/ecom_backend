let { UserService } = require("../services/index")
const jwt = require('jsonwebtoken');

class UserController {
    static async FetchAll(req, res){
        try{
            let response = await UserService.FetchAll()
            res.status(200).json({success: true, data: response})
        } catch (err){
            res.status(404).json({message: err.message})
        }
    }
    static async Login(req, res){
        try{
            let dt = req.body
            let response = await UserService.Login(dt)

            if(!response){
                throw new Error("Login Failed!");
            }

            let payload = { id: dt.id, email: dt.email }
            let secret = process.env.JWT_SECRET || "shinChan"
            let token = jwt.sign(payload, secret, {expiresIn: '1h'})

            res.status(200).json({success: true, data: response, AccessToken: token})
        } catch (err) {
            res.status(404).json({message: err.message})
        }
    }
    static async Register(req, res){
        try{
            let dt = req.body
            let response = await UserService.Register(dt)
            res.status(201).json({success: true, data: response})
        } catch (err) {
            res.status(404).json({message: err.message})
        }
    }
}

module.exports = UserController

