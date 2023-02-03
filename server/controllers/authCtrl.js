const {User} = require('../models/user')
require('dotenv').config()
const {SECRET} = process.env 
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const createToken = (username, id) => {
    return jwt.sign({username, id},SECRET,{expiresIn: '2 days'})
}

module.exports = {
    register: async (req, res) => {
      
        try{
            const {username, password} = req.body
            let foundUser = await User.findOne({where: {username: username}})

            if(foundUser){
                res.sendStatus(400).send('username already taken :(')
            } else {
                const salt = bcrypt.genSaltSync(7)
                const hash = bcrypt.hashSync(password, salt)
                const newUser = await User.create({
                    username,
                    hashedPass: hash
                })
                const token = createToken(newUser.username, newUser.id)
                const exp = Date.now() + 1000 * 60 * 60 * 48
                res.status(200).send({
                    username: newUser.username,
                    userId: newUser.id,
                    token,
                    exp
                })
            }

        } catch(err) {
            res.sendStatus(400)
            console.log(err)
        }
    },
    login: async (req, res) => {
        try {
            const {username, password} = req.body
            const foundUser = await User.findOne({where: {username}})

            if(foundUser){
                const isAuthenticated = bcrypt.compareSync(password, foundUser.hashedPass)

                if(isAuthenticated){
                    const token = createToken(foundUser.username, foundUser.id)
                    const exp = Date.now() +1000*60*60*48
                    res.status(200).send({
                        username: foundUser.username,
                        userId: foundUser.id,
                        token,
                        exp
                    })

                } else {
                    res.status(400).send('that password is incorrect :o')
                }

            } else {
                res.status(400).send('user not found :(')
            }

        } catch(err) {
            console.log(err)
            res.sendStatus(400)
        }
    }
}