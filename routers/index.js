const router = require('express').Router()
const UserRouter = require('./UserRouter.js')

router.use('/users', UserRouter)

module.exports = router