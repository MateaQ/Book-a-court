const express = require ("express");


const app = express();


const dbConfig =require ('./db')



const  port = process.env.PORT || 5004;
app.listen (port, () => console.log('Node Server Started'));
