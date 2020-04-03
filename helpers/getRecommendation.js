const axios = require('axios')
// const URL = 'https://developers.zomato.com/api/v2.1/search?count=20&lat=-6.1741&lon=106.8296&cuisines=Indonesian&establishment_type=casual&sort=rating&order=des'

function getRecommendations(req, res, next) {
    let adj = 'indonesian'
    return axios({
        method: 'GET',
        // url: URL,
        url: `https://developers.zomato.com/api/v2.1/search?count=20&lat=${req.lat}&lon=${req.lon}&cuisines=${adj}&establishment_type=casual&sort=rating&order=des`,
        headers: {
            "user-key": process.env.ZOMATO_APIKEY
        }
    })
    .then(response => {
        console.log(req.weatherData)
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
        
        return res.status(200).json({ restaurants: arr })

    }) 
    .catch(err => {
        console.log("ERROR FETCHING RECOMMENDATIONS");
        next(err)
    })

}

module.exports = { getRecommendations }