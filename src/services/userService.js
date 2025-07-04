let { Users } = require("../models/index")

class UserService {
    static async FetchAll(){
        try{
            let response = await Users.findAll()
            return response
        } catch (err){
            throw err
        }
    }
    static async Login(data){
        try{
            let user = await Users.findOne({where: {email: data.email}})
            if(!user){
                throw new Error("User Not Found")
            }
            if(user.password !== data.password){
                throw new Error("Invalid email or password")
            }
            return user
        } catch(err){
            throw err
        }
    }
    static async Register(data){
        try{
            let response = await Users.create(data)
            return response
        } catch(err) {
            throw err
        }
    }
}

module.exports = UserService