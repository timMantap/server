const models = require('../models')
const {generateToken} = require('../helpers/jwt.js')
const {decryptPassword} = require('../helpers/bcrypt.js')

class UserController {
    static read(req, res, next) {
        return models.User.findAll()
        .then(result => {
            return res.status(200).json({
                Users: result
            })
        })
        .catch(err => {
            return next(err)
        })  
    }

    static register(req, res, next) {
        console.log(`masuk ke register`)
        const {email, password} = req.body
        const newAccount = {email, password}
        console.log(`new Account: `, newAccount)
        return models.User.create(newAccount)
        .then(result => {
            const payload = {
                id: result.id,
                email: result.email
            }
            let token = generateToken(payload)
            return res.status(201).json({
                id: result.id,
                email: result.email,
                token: token
            })
        })
        .catch(err => {
            return next(err)
        })
    }

    static login(req, res, next) {
        console.log(`masuk ke login`)
        const {email, password} = req.body
        return models.User.findOne({where: {email: email}})
        .then(result => {
            if(result) {
                let compare = decryptPassword(password, result.password)
                if (compare) {
                    let payload = {
                        id: result.id,
                        email: result.email,
                    }
                    let token = generateToken(payload)
                    return res.status(200).json({
                        id: result.id,
                        email: result.email,
                        token: token
                    })
                } else {
                    return next({
                        name: `BadRequest`,
                        errors: [{message: `Invalid email/password`}]
                    })
                }
            } else {
                return next({
                    name: `BadRequest`,
                    errors: [{message: `Invalid email/password`}]
                })
            }
        })
        .catch(err => {
            return next(err)
        })
    }

    static googleLogin(req, res, next) {

    }
}

module.exports = UserController