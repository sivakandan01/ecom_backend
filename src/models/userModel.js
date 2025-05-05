let sequelize = require("../config/database")
let { DataTypes } = require("sequelize")

let Users = sequelize.define("Users", {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        validate:{
            isEmail: true
        },
        unique: true,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM("customer","admin","company"),
        allowNull: false
    },
    companyName: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    }
},
{
    timestamps: true
})

module.exports = Users