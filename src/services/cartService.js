let { Cart } = require("../models/index")

class CartService {
    static async FetchAll(){
        try{
            let response = await Cart.findAll()
            return response
        } catch (err){
            return err
        }
    }
    static async FetchById(id){
        try{
            let response = await Cart.findByPk(id)
            return response
        } catch (err) {
            return err
        }
    }
    static async FetchByUsers(id){
        try{
            let response = await Cart.findAll({where: {userId: id}})
            return response
        } catch (err) {
            return err
        }
    }
    static async FetchByProductId(id){
        try{
            let response = await Cart.findAll({where : {productId: id}})
            return response
        }catch(err){
            return err
        }
    }
    static async AddCart(data){
        try{
            let response = await Cart.create(data)
            return response
        } catch (err) {
            return err
        }
    }
    static async UpdateCart(id, data){
        try{
            let result = await Cart.update(data, {where: {id: id}})

            let response = await Cart.findByPk(id)
            return response
        } catch (err) {
            return err
        }
    }
    static async DeleteCart(id){
        try{
            let result = await Cart.findByPk(id)

            if(!result){
                throw new Error
            }
            
            await result.destroy()
            return true
        } catch (err){
            return err
        }
    }
}

module.exports = CartService