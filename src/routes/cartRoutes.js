let express = require("express")
let { CartController } = require("../controllers/index")

let router = express.Router()

router.get("/", CartController.FetchAll)
router.get("/:id", CartController.FetchById)
router.get("/user/:id", CartController.fetchByUsers)
router.post("/add", CartController.AddCart)
router.put("/update/:id", CartController.UpdateCart)
router.delete("/delete/:id", CartController.DeleteCart)

module.exports = router
