const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

module.exports = {
    WeekDays: sequelize.define("week_days", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        week_day_name: DataTypes.STRING,
    })
}