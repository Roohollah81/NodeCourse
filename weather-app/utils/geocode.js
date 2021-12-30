const request = require('postman-request')


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoicm9vaG9sbGFodiIsImEiOiJja3hveTIya2IyYTY3MnJwZWZyYXNuNmUzIn0.qWmTjS5g5rGP-jkEO-a69g&limit=1'

    request({ url: url, json:true}, (error, Response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (Response.body.features.length === 0) {
            callback('Unable to find location. try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: Response.body.features[0].center[0],
                longtude: Response.body.features[0].center[1],
                location: Response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode