let { CartService } = require("../services/index")


class CartController {
    static async FetchAll(req, res){
        try{
            let response = await CartService.FetchAll()
            res.status(200).json({success: true, data: response})
        } catch(err){
            res.status(404).json({success: false, message: "unable to fetch cart"})
        }
    }
    static async FetchById(req, res){
        try{
            let { id } = req.params
            let response = await CartService.FetchById(id)
            res.status(200).json({success: true, data: response})
        } catch (err){
            res.status(404).json({success: false, message: "unable to fetch cart"})
        }
    }
    static async fetchByUsers(req, res){
        try{
            let { id } = req.params
            let response = await CartService.FetchByUsers(id)
            res.status(200).json({success: true, data: response})
        }catch(err){

        }
    }
    static async AddCart(req, res){
        try{
            let dt = req.body
            let response = await CartService.AddCart(dt)
            res.status(200).json({success: true, data: response})
        } catch (err){
            res.status(404).json({success: false, message: "unable to add to cart"})
        }
    }
    static async UpdateCart(req, res){
        try{
            let { id } = req.params
            let dt = req.body
            let response = await CartService.UpdateCart(id, dt)
            res.status(200).json({success: true, data: response})
        } catch (err) {
            res.status(404).json({success: false, message: "unable to update cart"})
        }
    }
    static async DeleteCart(req, res){
        try{
            let { id } = req.params
            let response = await CartService.DeleteCart(id)
            if(response){
                res.status(200).json({success: true, message: "Cart Deleted successfully"})
            }
        } catch (err){
            res.status(404).json({success: false, message: "unable to delete cart"})
        }
    }
}

module.exports = CartController