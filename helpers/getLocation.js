const axios = require('axios')
const URL = 'http://api.ipstack.com/check?access_key='

function getLocation(req, res, next) {
    return axios({
        method: 'GET',
        url: URL+process.env.IPSTACK_APIKEY
    })
    .then(response => {
        let lat = response.data.latitude
        let lon = response.data.longitude
        let country = response.data.country_name
        let country_code = response.data.country_code
        let adj = response.data.location.languages[0].name
        let data = {
            lat,
            lon,
            country,
            country_code,
            adj
        }

        // next(data)
        return data
        // return res.status(200).json({lat, lon})

    }) 
    .catch(err => {
        console.log("ERROR FETCHING GEOLOCATION");
        next(err)
    })

}

module.exports = { getLocation }