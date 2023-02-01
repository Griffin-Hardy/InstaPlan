const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

module.exports = {
    Meals: sequelize.define("meals", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        meal_name: DataTypes.STRING,
    })
}