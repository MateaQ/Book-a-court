const mongoose = require("mongoose");


var mongoURL = 'mongodb+srv://matea:eiX7chah@cluster0.ze6ds.mongodb.net/Book-a-Court'

mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser: true})


var connection =mongoose.connection

connection.on('error', ()=> {
console.log ('Mongo DB Connection failed')
})

connection.on('connected', () =>{
console.log('Mongo DB Connection Successful')

})

module.exports =mongoose