const express = require ("express");


const app = express();


const dbConfig = require ('./db')
const sportsRoute = require('./routes/sportsRoute')


app.use('./api/sports', sportsRoute)


const  port = process.env.PORT || 5000 ;
app.listen (port, () => console.log('Node Server using nodemon'));

