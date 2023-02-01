const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

module.exports = {
    MealType: sequelize.define("meal_type", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        meal_type_name: DataTypes.STRING,
    })
}