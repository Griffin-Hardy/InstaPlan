const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

module.exports = {
    Week: sequelize.define("week", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        weekStart: DataTypes.STRING,
        weekEnd: DataTypes.STRING
    })
}