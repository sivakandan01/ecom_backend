let express = require("express")
let { UserController } = require("../controllers/index")
let router = express.Router()

router.get("/", UserController.FetchAll)
router.get("/:id", UserController.FetchById)
router.post("/login", UserController.Login)
router.post("/register", UserController.Register)
router.put("/update/:id", UserController.UpdateUser)

module.exports = router