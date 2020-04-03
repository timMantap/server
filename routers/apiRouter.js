const apiRouter = require('express').Router()
const apiController = require('../controllers/apiController.js')
const {authentication} = require('../middleware/authentication.js')

apiRouter.use(authentication)

apiRouter.get('/locs', apiController.getCurrentLocation)
// apiRouter.get('/weather', apiController.getCurrentWeather)
apiRouter.get('/recoms', apiController.getRecommendations)



module.exports = apiRouter