let { OrdersService } = require("../services/index")

class OrderController {
    static async FetchAll(req, res){
        try{
            let response = await OrdersService.FetchAll()
            res.status(200).json({success: true, data: response})
        } catch(err){
            res.status(404).json({success: false, message: err})
        }
    }
    static async AddOrder(req, res){
        try{
            let data = req.body
            let response = await OrdersService.CreateOrder(data)
            res.status(201).json({success: true, data: response})
        } catch(err){
            res.status(404).json({success: false, message: err})
        }
    }
    static async UpdateOrder(req, res){
        try{
            let { id } = req.params
            let data = req.body
            let result = await OrdersService.FetchById(id)
            if(!result){
                res.status(404).json({success: false, message: "Order Doesnt Present"})
            }
            let response = await OrdersService.UpdateOrder(data)
            res.status(200).json({success: true, data: response})
        } catch(err){
            res.status(404).json({success: false, message: err})
        }
    }
}

module.exports = OrderController