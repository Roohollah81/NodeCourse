const request = require('postman-request')
                
const url = 'http://api.weatherstack.com/current?access_key=2dc00b75f0bdc5f3b5f858adc8da7d8e&query=37.8267,-122.4233'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})