const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

module.exports = {
    Days: sequelize.define("days", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
    })
}