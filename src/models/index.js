let Users = require("./userModel")
let Cart = require("./cartModel")
let Products = require("./productsModel")

Cart.belongsTo(Users, {foreignKey: "userId", targetKey: "id"})
Users.hasMany(Cart, {foreignKey: "userId", sourceKey: "id"})

Cart.belongsTo(Products, {foreignKey: "productId", targetKey: "id"})
Products.hasMany(Cart, {foreignKey: "productId", sourceKey: "id"})

module.exports = {
    Users,
    Cart,
    Products
}