let { Products } = require("../models/index")

class ProductService {
    static async FetchAll(){
        try{
            let response = await Products.findAll()
            return response
        } catch (err) {
            return err
        }
    }
    static async FetchById(id){
        try{
            let response = await Products.findByPk(id)
            return response
        } catch (err) {
            return err
        }
    }
    static async FetchByName(name){
        try{
            let response = await findAll({where: {name: name}})
            return response
        } catch(err){
            return err
        }
    }
    static async AddProduct(data){
        try{
            let response = await Products.create(data)
            return response
        } catch (err) {
            return err
        }
    }
    static async UpdateProduct(id, data){
        try{
            let result = await Products.update(data, {where: {id: id}})
            
            let response = await Products.findByPk(id)
            return response
        } catch (err){
            return err
        }
    }
    static async DeleteProduct(id){
        try{
            let response = await Products.findByPk(id)

            response.destroy()
            return true
        } catch (err) {
            return err
        }
    }
}

module.exports = ProductService