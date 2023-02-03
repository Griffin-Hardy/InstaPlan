const {MealType} = require('../models/meal_type')

module.exports = {
    getAllWeeks: (req, res) => {
        console.log('getAllWeeks')
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
    addMeal: (req, res) => {
        console.log('addmeal')
        try {
            const {mealName, selectedMealType, userId} = req.body
            const newMeal = meal.create({meal_name: mealName, userId, mealTypeId: selectedMealType})

            res.status(200).send(newMeal)
        } catch(err) {
            console.log(err)
            res.sendStatus(400)
        }
    }
}