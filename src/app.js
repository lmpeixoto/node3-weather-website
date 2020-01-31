const path = require('path')
const express = require('express')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()

//  Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')


// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Andrew Mead'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Andrew Mead'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        message: 'This page serves the purpose of helping you with your questions.'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'The temperature is 32ºC',
        location: 'Lisbon, Portugal'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})