const {MealType} = require('../models/meal_type')
const {Meals} = require('../models/meals')
const {Week} = require('../models/week')
const {WeekDays} = require('../models/week_days')


module.exports = {
    getWeek: async (req, res) => {
        
    },
    getAllMealTypes: async (req, res) => {
        console.log('mealTypes')
        try{
            const allMealTypes = await MealType.findAll()
            res.status(200).send(allMealTypes)
        } catch(err){
            console.log(err)
            res.sendStatus(400)
        }
    },
    getAllWeekDays: async (req, res) => {
        console.log('weekDays')
        try{
            const allWeekDays = await WeekDays.findAll()
            res.status(200).send(allWeekDays)
        } catch(err) {
            console.log(err)
            res.sendStatus(400)
        }
    },
    addMeal: async (req, res) => {
        console.log('addmeal')
        try {
            const date = new Date()
            const {mealName, selectedMealType, userId, selectedWeekDay} = req.body
            const newMeal = await Meals.create({meal_name: mealName, userId, mealTypeId: selectedMealType, weekDayId: selectedWeekDay})

            res.status(200).send(newMeal)
        } catch(err) {
            console.log(err)
            res.sendStatus(400)
        }
    }
}