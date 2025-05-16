let { ProductService } = require("../services/index")

class ProductController {
    static async FetchAll(req, res){
        try{
            let response = await ProductService.FetchAll()
            res.status(200).json({success: true, data: response})
        } catch (err){
            res.status(404).json({success: false, message: "unable to fetch products"})
        }
    }
    static async FetchById(req, res){
        try{
            let id = req.params
            let response = await ProductService.FetchById(id)
            res.status(200).json({success: true, data: response})
        } catch(err){
            res.status(404).json({success: false, message: "unable to fetch product"})
        }
    }
    static async FetchByName(req, res){
        try{
            let name = req.params
            let response = await ProductService.FetchByName(name)
            res.status(200).json({success: true, data: response})
        } catch (err){
            res.status(404).json({success: false, message: "unable to fetch product by name"})
        }
    }
    static async AddProduct(req, res){
        try{
            let dt = req.body
            let response = await ProductService.AddProduct(dt)
            res.status(201).json({success: true, data: response})
        } catch(err){
            res.status(404).json({success: false, message: "unable to add products"})
        }
    }
    static async UpdateProduct(req, res){
        try{
            let id = req.params
            let dt = req.body
            let product = await ProductService.FetchById(id)

            if(!product){
                res.status(404).json({success: false, message: "product not found"})
            }
            let response = await ProductService.UpdateProduct(id, dt)
            res.status(200).json({success: true, data: response})
        } catch (err) {
            res.status(404).json({success: false, message: "unable to update products"})
        }
    }
    static async DeleteProduct(req, res){
        try{
            let { id } = req.params
            let response = await ProductService.DeleteProduct(id)
            if(response){
                res.status(200).json({success: true, message: "Product Deleted successfully"})
            }
        } catch(err){
            res.status(404).json({success: false, message: "unable to delete product"})
        }
    }
}

module.exports = ProductController