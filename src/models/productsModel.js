let sequelize = require("../config/database")
let { DataTypes } = require("sequelize")

let Products = sequelize.define("Products",{
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    productType:{
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    companyName: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    timestamps: true
})

module.exports = Products