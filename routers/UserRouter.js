const UserRouter = require('express').Router()
const UserController = require('../controllers/UserController.js')
const {authentication} = require('../middleware/authentication.js')

UserRouter.get('/', UserController.read)
// UserRouter.get('/', authentication, UserController.read)
UserRouter.post('/register', UserController.register)
UserRouter.post('/login', UserController.login)
UserRouter.post('/googleLogin', UserController.googleLogin)

module.exports = UserRouter