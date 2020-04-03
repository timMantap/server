const axios = require('axios')

function getRecommendations(req, res, next) {
    let adj = 'indonesian'
    return axios({
        method: 'GET',
        url: `https://developers.zomato.com/api/v2.1/search?lat=${req.locData.lat}&lon=${req.locData.lon}&sort=real_distance`,
        headers: {
            "user-key": process.env.ZOMATO_APIKEY
        }
    })
    .then(response => {
        // console.log(req.weatherData)
        let raw = response.data.restaurants
        let arr = []


        raw.forEach(el => {
            let url = el.restaurant.url
            let id = el.restaurant.id
            let name = el.restaurant.name
            let address = el.restaurant.location.address
            let cuisines = el.restaurant.cuisines
            let timings = el.restaurant.timings
            let cost42 = el.restaurant.average_cost_for_two
            let currency = el.restaurant.currency
            let avg_cost_for_two = `${currency}.${cost42}`
            let thumb = el.restaurant.thumb
            
            arr.push({
                id,
                url,
                thumb,
                name,
                address,
                cuisines,
                timings,
                avg_cost_for_two
            })
        })

        // next(arr)
        // return arr
        
        return res.status(200).json({ 
            restaurants: arr,
            weather: req.weatherData        
        })

    }) 
    .catch(err => {
        console.log("ERROR FETCHING RECOMMENDATIONS");
        next(err)
    })
}

module.exports = { getRecommendations }