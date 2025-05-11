let { ProductController } = require("../controllers/index")
let validate = require("../middleware/validate")
let ProductValidation = require("../validation/productValiation")

let express = require("express")
let router = express.Router()

router.get("/", ProductController.FetchAll)
router.get("/:id", ProductController.FetchById)
router.get("/:name", ProductController.FetchByName)
router.post("/add", 
    validate(ProductValidation.create.body), 
    ProductController.AddProduct
)
router.put("/update/:id", validate(ProductValidation.update.body), ProductController.UpdateProduct)
router.delete("/delete/:id", ProductController.DeleteProduct)

module.exports = router
