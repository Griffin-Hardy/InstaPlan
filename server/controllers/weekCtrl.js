const {MealType} = require('../models/meal_type')
const {Meals} = require('../models/meals')
const {Week} = require('../models/week')
const {WeekDays} = require('../models/week_days')


module.exports = {
    getAllMeals: async (req, res) => {
        console.log('getAllWeeks')
        try{
            const {userId} = req.params
            const allMeals = await Meals.findAll({include: [{
                model: Week, 
                where: {userId}
            },{
                model: WeekDays
            },{
                model:MealType
            }]})
            res.status(200).send(allMeals)
        } catch(err){
            console.log(err)
            res.sendStatus(400)
        }
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
            const {mealName, selectedMealType, userId, selectedWeekDay, weekStart, weekEnd} = req.body
            let weekId
            const existingWeek = await Week.findOne({where: {weekStart, weekEnd}})
            if(existingWeek){
                console.log('existingWeek', existingWeek)
                weekId = existingWeek.id
            } else{
                const newWeek = await Week.create({weekStart, weekEnd, userId})
                console.log('newWeek', newWeek)
                weekId = newWeek.id
            }
            console.log(selectedMealType, selectedWeekDay, weekId)
            const newMeal = await Meals.create({meal_name: mealName, mealTypeId: selectedMealType, weekDayId: selectedWeekDay, weekId})

            res.status(200).send(newMeal)
        } catch(err) {
            console.log(err)
            res.sendStatus(400)
        }
    }
}