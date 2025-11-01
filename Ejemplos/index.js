const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/weather', (req, res) => {
    res.send('The Current Weather is Nice')
})

app.use((req,res) => {
    res.status(404).send('No se encontró tu página')
})

app.listen(3000)
console.log(`Server on port ${3000}`)