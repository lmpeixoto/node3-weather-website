const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url ='https://api.darksky.net/forecast/c1bc11bca81d1eddbbfb8fbd50ed4666/' + latitude + ',' + longitude + '?units=si&lang=pt'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + 
            body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + 
            '% chance of rain. The maximum temperature is ' + body.daily.data[0].temperatureHigh + 
            ' degrees. And the minimum temperature is ' + body.daily.data[0].temperatureLow + ' degrees.')
        }
    })
}

module.exports = forecast