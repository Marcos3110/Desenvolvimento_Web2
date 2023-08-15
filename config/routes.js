console.log("teste")
const express = require('express')

const routes= express.Router()
const path=require('path')

routes.get('/', function (req, res) {
    res.send('Ola mundo')
})

routes.get('/teste', function (req, res) {
    res.sendFile(path.join(__dirname + '/../src/teste.html'))
})

module.exports=routes