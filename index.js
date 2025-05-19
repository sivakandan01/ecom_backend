let sequelize = require("./src/config/database");
let express = require("express");
let cors = require("cors");
let { UserRoutes } = require("./src/routes/index");
let { ProductRoutes } = require("./src/routes/index");
let { CartRoutes } = require("./src/routes/index");
let { OrderRoutes } = require("./src/routes/index");

let app = express();

app.use(express.json());
app.use(cors());

app.use("/users", UserRoutes);
app.use("/products", ProductRoutes);
app.use("/cart", CartRoutes);
app.use("/order", OrderRoutes);

sequelize
    .sync()
    .then(() => app.listen(4000, () => console.log("port is running in 4000")))
    .catch((err) => console.log(err)); 
