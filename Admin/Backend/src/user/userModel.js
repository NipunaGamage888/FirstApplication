var mongoose  = require("mongoose");
const Schema = mongoose.Schema

var userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required:true,
    },
    telephone:{
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports= mongoose.model('Users', userSchema)
