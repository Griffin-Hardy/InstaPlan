require('dotenv').config()
const express = require('express')
const cors = require ('cors')

const {SERVER_PORT} = process.env
const {User} = require('./models/user')
const {Week} = require('./models/week')
const {WeekDays} = require('./models/week_days')
const {Days} = require('./models/days')
const {Meals} = require('./models/meals')
const {sequelize} = require('./util/database')
const {MealType} = require('./models/meal_type')

const {register, login} = require('./controllers/authCtrl')


const app = express()

app.use(express.json())
app.use(cors())


User.hasMany(Week)
Week.belongsTo(User)

Week.hasMany(Days)
Days.belongsTo(Week)

WeekDays.hasMany(Days)
Days.belongsTo(WeekDays)

Days.hasMany(Meals)
Meals.belongsTo(Days)

MealType.hasMany(Meals)
Meals.belongsTo(MealType)


app.post('/register', register)
app.post('/login', login)


sequelize.sync()
// sequelize.sync({force: true})
    .then(() => {
        app.listen(SERVER_PORT, () => console.log(`we are docked at port ${SERVER_PORT}!`))
    })
    .catch(err => console.log(err))
