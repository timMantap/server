const models = require('../models')
const {generateToken} = require('../helpers/jwt.js')
const {decryptPassword} = require('../helpers/bcrypt.js')
const { OAuth2Client } = require('google-auth-library');

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
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
        let email;
        // nge decode token yang dikasih gmail
        client.verifyIdToken({
                idToken: req.body.id_token,
                audience: process.env.GOOGLE_CLIENT_ID
            })
            .then(ticket => {
                console.log(`=======HASIL DECODE TOKEN========`)
                console.log(ticket)
                console.log(`=======DOWN========`)
                    // ngambil email dari hasil decode, utk dicek di db kita, email user udh terdaftar apa belum
                email = ticket.getPayload().email
                return models.User.findOne({ where: { email: email } })
                    .then(result => {
                        if (result) {
                            let payload = {
                                id: result.id,
                                email
                            }
                            let token = generateToken(payload)
                            res.status(200).json({
                                id: result.id,
                                email: email,
                                token: token
                            })
                        } else {
                            return models.User.create({ email, password: 'userGoogle' })
                        }
                    })
                    .then(result => {
                        let payload = {
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

            })
    }
}

module.exports = UserController