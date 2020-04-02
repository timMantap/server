const axios = require('axios')
const URL = 'api.airvisual.com/v2/nearest_city?key='

function getWeather() {
    return axios({
        method: 'GET',
        url: URL+process.env.IQAIR_APIKEY
    })
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
        return data
        // return res.status(200).json({lat, lon})

    }) 
    .catch(err => {
        console.log("ERROR FETCHING WEATHER");
        next(err)
    })

}

module.exports = { getWeather }