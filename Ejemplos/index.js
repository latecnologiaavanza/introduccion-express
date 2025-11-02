const express = require('express')

const app = express()

app.get('/productos', (req, res) => {

    //validar datos
    //consultar una bae de datos
    //procesar datos

    res.send('Lista de Productos')
})

app.post('/productos', (req, res) => {
    res.send('Creando productos')
})

app.put('/productos', (req, res) => {
    res.send('Actualizando productos')
})

app.delete('/productos', (req, res) => {
    res.send('Eliminando productos')
})

app.patch('/productos', (req, res) => {
    res.send('Actualizando una parte del producto')
})

app.listen(3000)
console.log(`Server on Port ${3000}`)