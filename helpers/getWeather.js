const axios = require('axios')
const URL = `http://api.airvisual.com/v2/nearest_city?key=${process.env.IQAIR_APIKEY}`

function getWeather(req, res, next) {
    return axios.get(URL)
    .then(response => {
        let raw = response.data.data.current.weather
        let temperature = raw.tc // CELCIUS
        let humidity = raw.hu // % HUMIDITY
        let precip = raw.pr // PRECIPITATION IN MM
        let windspeed = raw.ws // WIND SPEED, M/S
        let data = {
            temperature,
            humidity,
            precip,
            windspeed
        }

        // next(data)
        // return data
        return next()
        req.weatherData = response.data
        // return res.status(200).json({ data: response.data })

    }) 
    .catch(err => {
        console.log("ERROR FETCHING WEATHER");
        next(err)
    })

}

module.exports = { getWeather }