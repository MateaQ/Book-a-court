const mongoose = require("mongose");


var mongoURL = 'mongodb+srv://matea:eiX7chah@cluster0.ze6ds.mongodb.net/test'

mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewParser: true})


var connection =mongoose.connection

connection.on('error', ()=> {
console.log ('Mongo DB Connection failed')
})

connection.on('connected', () =>{
console.log('Mongo DB Connection Successful')

})

module.exports =mongoose