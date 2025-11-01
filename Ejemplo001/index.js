const express = require('express')
const path = require('path')

//Crea una aplicación Express
const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'))
})

app.listen(3000)
console.log(`Server on port ${3000}`)

/* EJEMPLO CON NODE JS
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    //Crea un stream de lectura (flujo de datos) para el archivo index.html
    const read = fs.createReadStream('./static/index.html')
    //Conecta el flujo de lectura del archivo (read) con la respuesta del servidor (res)
    read.pipe(res)
})

server.listen(3000)
console.log(`Server on Port ${3000}`)
*/