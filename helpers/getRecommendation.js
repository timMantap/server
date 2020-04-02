const axios = require('axios')
// const URL = 'https://developers.zomato.com/api/v2.1/search?count=20&lat=-6.1741&lon=106.8296&cuisines=Indonesian&establishment_type=casual&sort=rating&order=des'

function getRecommendations(req, res, next, lat, lon, adj) {
    return axios({
        method: 'GET',
        url: `https://developers.zomato.com/api/v2.1/search?count=20&lat=${lat}&lon=${lon}&cuisines=${adj}&establishment_type=casual&sort=rating&order=des`,
        headers: {
            "user-key": process.env.ZOMATO_APIKEY
        }
    })
    .then(response => {

        let raw = response.data.restaurants
        let arr = []


        raw.forEach(el => {
            let id = el.id
            let name = el.name
            let address = el.location.address
            let cuisines = el.cuisines
            let timings = el.timings
            let cost42 = el.average_cost_for_two
            let currency = el.currency
            let avg_cost_for_two = `${currency}.${cost42}`
            let thumb = el.thumb
            
            arr.push({
                id,
                thumb,
                name,
                address,
                cuisines,
                timings,
                avg_cost_for_two
            })
        })

        // next(arr)
        return arr
        
        // return res.status(200).json({lat, lon})

    }) 
    .catch(err => {
        console.log("ERROR FETCHING RECOMMENDATIONS");
        next(err)
    })

}

module.exports = { getRecommendations }