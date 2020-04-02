const axios = require('axios')
const URL = 'https://developers.zomato.com/api/v2.1/search?count=20&lat=-6.1741&lon=106.8296&cuisines=Indonesian&establishment_type=casual&sort=rating&order=des'

function getWeather() {
    return axios({
        method: 'GET',
        url: URL+process.env.IQAIR_APIKEY,
        headers: {

        }
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