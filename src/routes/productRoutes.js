let express = require("express")
let { ProductController } = require("../controllers/index")

let router = express.Router()

router.get("/", ProductController.FetchAll)
router.get("/:id", ProductController.FetchById)
router.post("/add", ProductController.AddProduct)
router.put("/update/:id", ProductController.UpdateProduct)
router.delete("/delete/:id", ProductController.DeleteProduct)

module.exports = router
