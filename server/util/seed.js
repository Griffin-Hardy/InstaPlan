const {sequelize} = require('./database')
const {MealType} = require('../models/meal_type')

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

const seedDatabase = async () => {
    await MealType.bulkCreate(types)
}

module.exports = {
    seedDatabase
}