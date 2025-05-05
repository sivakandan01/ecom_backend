let sequelize = require("../config/database")
let { DataTypes } = require("sequelize")

let Cart = sequelize.define("Cart",{
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    productId:{
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: "Products",
            key: "id"
        }
    },
    productName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: DataTypes.UUID,
        references: {
            model: "Users",
            key: "id"
        },
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    timestamps: true
})

module.exports = Cart