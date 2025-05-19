let { OrderController } = require("../controllers/index")
let express = require("express")

let router = express.Router()

router.get("/", OrderController.FetchAll)
router.post("/add", OrderController.AddOrder)
router.put("/update/:id", OrderController.UpdateOrder)

module.exports = router