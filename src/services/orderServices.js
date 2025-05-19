let { Orders } = require("../models/index")

class OrdersService {
    static async FetchAll(){
        try{
            let response = await Orders.findAll()
            return response
        }catch (err){
            return err
        }
    }
    static async FetchById(id){
        try{
            let response = await Orders.findByPk(id)
            return response
        } catch(err){
            return err
        }
    }
    static async CreateOrder(data){
        try{
            let response = await Orders.create(data)
            return response
        } catch(err){
            return err
        }
    }
    static async UpdateOrder(data){
        try{
            let result = await Orders.update(data, {where: {id: data.id}})

            let response = await Orders.findByPk(data.id)
            return response
        } catch(err){
            return err
        }
    }
}

module.exports = OrdersService