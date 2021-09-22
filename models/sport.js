const mongoose =require("mongoose");

const SportSchema = mongoose.Schema ({

name:{
    type: String,
    required: true
},
maxcount :{
    type: Number,
    required: true
},
price :{
    type: Number,
    required: true
},
type : {
type: String,
required: true
},
description :{
type: String,
required: true

}

}, {
    timestamps: true,
}


)

const sportModel =mongoose.model('sports', SportSchema)

module.export =  sportModel