const axios = require('axios')
const {
    customError
} = require('../helpers/customError')
let URL
let URLONG

class apiController {

    static getCurrentLocation(req, res, next) {

        console.log(">>> CONTROLLERS: GET CURRENT LOCATION");

        URL = 'http://api.ipstack.com/check?access_key='

        // console.log("what;s the key?");
        // console.log(process.env.IPSTACK_APIKEY);

        return axios({
                method: 'GET',
                url: URL + process.env.IPSTACK_APIKEY
            })
            .then(response => {

                // console.log("WHAT'S RESPONSE?");
                // console.log(response);

                if (response) {

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

                    // // next(data)
                    // return data
                    return res.status(200).json(data)

                } else {
                    throw new customError(404, 'NOT FOUND')
                }

            })
            .catch(err => {
                console.log("ERROR FETCHING GEOLOCATION");
                next(err)
            })

    }


    static getRecommendations(req, res, next) {

        console.log(">>> CONTROLLERS: RESTAURANT RECOMMENDATION!");

        URL = 'http://api.ipstack.com/check?access_key='

        // console.log("what;s the key?");
        // console.log(process.env.IPSTACK_APIKEY);

        return axios({
                method: 'GET',
                url: URL + process.env.IPSTACK_APIKEY
            })
            .then(response => {

                // console.log("WHAT'S RESPONSE?");
                // console.log(response);

                if (response) {

                    console.log("LOCATION FOUND");

                    let lat = response.data.latitude
                    let lon = response.data.longitude
                    let country = response.data.country_name
                    let country_code = response.data.country_code
                    let adj = response.data.location.languages[0].name

                    return axios({
                        method: 'GET',
                        url: `https://developers.zomato.com/api/v2.1/search?count=20&lat=${lat}&lon=${lon}&cuisines=${adj}&establishment_type=casual&sort=rating&order=des`,
                        headers: {
                            "user-key": process.env.ZOMATO_APIKEY
                        }
                    })

                } else {
                    throw new customError(404, 'NOT FOUND')
                }

            })
            .then(response => {
                console.log("WHAT'S VERDICT?");
                // console.log(response);

                let raw = response.data.restaurants
                // console.log(raw);
                let arr = []


                raw.forEach(el => {
                    let id = el.restaurant.id
                    let name = el.restaurant.name
                    let address = el.restaurant.location.address
                    let cuisines = el.restaurant.cuisines
                    let timings = el.restaurant.timings
                    let cost42 = el.restaurant.average_cost_for_two
                    let currency =el.restaurant.currency
                    let avg_cost_for_two = `${currency}.${cost42}`
                    let thumb = el.restaurant.thumb

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

                console.log("CLEANED");
                // console.log(arr);

                return res.status(200).json({data: arr})

            })
            .catch(err => {
                console.log("ERROR FETCHING GEOLOCATION");
                next(err)
            })

    }


    // static getCurrentWeather(req, res, next) {

    //     console.log(">>> CONTROLLERS: FIRTS, GET THE CURRENT LOCATION");

    //     URL = 'http://api.ipstack.com/check?access_key='

    //     // console.log("what;s the key?");
    //     // console.log(process.env.IPSTACK_APIKEY);

    //     return axios({
    //         method: 'GET',
    //         url: URL+process.env.IPSTACK_APIKEY
    //     })
    //     .then(response => {

    //         console.log("WHAT'S RESPONSE?");
    //         console.log(response);

    //         if(response) {

    //             console.log("LOCATION FOUND!");

    //             let lat = response.data.latitude
    //             let lon = response.data.longitude

    //             // // next(data)
    //             // return data
    //             // return res.status(200).json(data)

    //             URL = `http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=${process.env.IQAIR_APIKEY}`
    //             console.log("NEXT URL");
    //             console.log(URL);

    //             return axios({
    //                 method: 'GET',
    //                 url: URL
    //             })


    //         } else {
    //             throw new customError(404, 'NOT FOUND')
    //         }

    //     }) 
    //     .then(response => {
    //         console.log("WEATHER FETCHED");
    //         console.log(response);
    //     })
    //     .catch(err => {
    //         console.log("ERROR FETCHING WEATHER");
    //         next(err)
    //     })

    // }




}

module.exports = apiController