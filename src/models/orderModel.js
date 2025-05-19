const { DataTypes } = require("sequelize");
let sequelize = require("../config/database");

let Orders = sequelize.define(
    "Orders",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        productId: {
            type: DataTypes.UUID,
            references: {
                model: "Products",
                key: "id",
            },
            allowNull: false,
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user: {
            type: DataTypes.UUID,
            references: {
                model: "Users",
                key: "id",
            },
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cost: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        OrderDate: {
            type: DataTypes.DATEONLY,
        },
        status: {
            type: DataTypes.ENUM("pending", "completed", "cancelled"),
            allowNull: false,
            defaultValue: "pending",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = Orders;
