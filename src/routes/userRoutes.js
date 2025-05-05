let { UserController } = require("../controllers/index")
let validate = require("../middleware/validate")
let UserValidation = require("../validation/userValidation")

let express = require("express")
let router = express.Router()

router.get("/", UserController.FetchAll)
router.post("/login", UserController.Login)
router.post("/register", validate(UserValidation.create.body), UserController.Register)

module.exports = router