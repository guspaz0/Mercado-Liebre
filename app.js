const express = require('express')
const morgan = require('morgan')
const path = require('path')
require("dotenv").config();
const {HOST, PORT} = process.env
const app = express()


app.use(express.static('public'));
app.use(morgan("dev"));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/home.html'))
});

app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/login.html'))
});

app.get('/register', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/register.html'))
});

app.listen(PORT,(req,res) => {
    console.log(`Server corriendo en puerto http://${HOST}:${PORT}`)
});