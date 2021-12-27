const request = require('postman-request')
                
const url = 'http://api.weatherstack.com/current?access_key=2dc00b75f0bdc5f3b5f858adc8da7d8e&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.current.weather_description[0] + ". It is currently " + response.body.current.temprature + " degress out. It feels like " + response.body.current.feelslike + " degress out.")
})