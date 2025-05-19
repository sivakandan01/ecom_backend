let Users = require("./userModel")
let Cart = require("./cartModel")
let Products = require("./productsModel")
let Orders = require("./orderModel")

Cart.belongsTo(Users, {foreignKey: "userId", targetKey: "id"})
Users.hasMany(Cart, {foreignKey: "userId", sourceKey: "id"})

Cart.belongsTo(Products, {foreignKey: "productId", targetKey: "id"})
Products.hasMany(Cart, {foreignKey: "productId", sourceKey: "id"})

Orders.belongsTo(Products, {foreignKey: "productId", targetKey: "id"})
Products.hasMany(Orders, {foreignKey: "productId", sourceKey: "id"})

Orders.belongsTo(Users, {foreignKey: "user", targetKey: "id"})
Users.hasMany(Orders, {foreignKey: "user", sourceKey: "id"})

module.exports = {
    Users,
    Cart,
    Products,
    Orders
}