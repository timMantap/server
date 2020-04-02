const router = require('express').Router()
const UserRouter = require('./UserRouter.js')
const { getLocation } = require('../helpers/getLocation')
const { getRecommendations } = require('../helpers/getRecommendation')
const { getWeather } = require('../helpers/getWeather')

router.use('/users', UserRouter)
router.get('/feature', getLocation, getWeather, getRecommendations)

module.exports = router