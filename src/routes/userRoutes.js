let express = require("express")
let { UserController } = require("../controllers/index")
let router = express.Router()

router.get("/", UserController.FetchAll)
router.post("/login", UserController.Login)
router.post("/register", UserController.Register)

module.exports = router