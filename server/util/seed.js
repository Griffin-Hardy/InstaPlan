const {sequelize} = require('./database')
const {MealType} = require('../models/meal_type')
const {WeekDays} = require('../models/week_days')

const types = [
    {
        meal_type_name: 'Breakfast'
    },
    {
        meal_type_name: 'Lunch'
    },
    {
        meal_type_name: 'Dinner'
    }
]

const weekDays = [
    {
        week_day_name: 'Sunday'
    },
    {
        week_day_name: 'Monday'
    },
    {
        week_day_name: 'Tuesday'
    },
    {
        week_day_name: 'Wednesday'
    },
    {
        week_day_name: 'Thursday'
    },
    {
        week_day_name: 'Friday'
    },
    {
        week_day_name: 'Saturday'
    },
]

const seedDatabase = async () => {
    await MealType.bulkCreate(types)
    await WeekDays.bulkCreate(weekDays)
}

module.exports = {
    seedDatabase
}