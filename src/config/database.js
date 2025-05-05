let { Sequelize } = require("sequelize")
require('dotenv').config()

let sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: "postgres",
        logging: false
    }
)

sequelize.authenticate()
                        .then(() => console.log('Database established Successfully'))
                        .catch((err) => console.log(err))

module.exports = sequelize