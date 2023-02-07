require('dotenv').config()
const express = require('express')
const cors = require ('cors')

const {SERVER_PORT} = process.env
const {User} = require('./models/user')
const {Week} = require('./models/week')
const {WeekDays} = require('./models/week_days')
const {Meals} = require('./models/meals')
const {sequelize} = require('./util/database')
const {MealType} = require('./models/meal_type')
const {seedDatabase} = require('./util/seed')

const {register, login} = require('./controllers/authCtrl')
const {getAllMeals, getAllMealTypes, addMeal, getAllWeekDays} = require('./controllers/weekCtrl')

const app = express()

app.use(express.json())
app.use(cors())


User.hasMany(Week)
Week.belongsTo(User)

Week.hasMany(Meals)
Meals.belongsTo(Week)

WeekDays.hasMany(Meals)
Meals.belongsTo(WeekDays)

MealType.hasMany(Meals)
Meals.belongsTo(MealType)


app.post('/register', register)
app.post('/login', login)

app.get("/types", getAllMealTypes)
app.get('/weekdays', getAllWeekDays)
app.get('/getmeals/:userId', getAllMeals)
app.post('/addmeal', addMeal)



// sequelize.sync({force: true}).then(() => seedDatabase())
sequelize.sync()
    .then(() => {
        app.listen(SERVER_PORT, () => console.log(`we are docked at port ${SERVER_PORT}!`))
    })
    .catch(err => console.log(err))
