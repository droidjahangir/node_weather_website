const request = require('request')
const http = require('http')

const forecast = (latitude, longitude, callback) => {


    const api_key = '50ccfef6b13bfeef0e0a13b61d913575'

    var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + api_key
    
    // darksky currently unavailable
    // const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude

    request({ url, json: true }, (error, response) => {


        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.weather[0].description + ' It is currently ' + response.body.main.temp + ' degress out. This is high today is ' + response.body.main.temp_max + ' with a low of '+ response.body.main.temp_min +' temperature. There is a ' + response.body.main.humidity + '% chance of rain and wind speed ' + response.body.wind.speed + ' km/h. cloud coverage is ' + response.body.clouds.all + '%')
        }

    })

}





module.exports = forecast