const request = require('postman-request')
                
// const url = 'http://api.weatherstack.com/current?access_key=2dc00b75f0bdc5f3b5f858adc8da7d8e&query=37.8267,-122.4233&units=f'

// request({ url: url, json: true }, (error, response) => {
//     console.log(response.body.current.weather_description[0] + ". It is currently " + response.body.current.temprature + " degress out. It feels like " + response.body.current.feelslike + " degress out.")
// })



const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoicm9vaG9sbGFodiIsImEiOiJja3hveTIya2IyYTY3MnJwZWZyYXNuNmUzIn0.qWmTjS5g5rGP-jkEO-a69g&limit=1'

request({ url: geocodeURL, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather servise!')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try another search.')
    } else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude, longitude)
    }
})