var mongoose  = require("mongoose");
const Schema = mongoose.Schema

var ProductsSchema = new Schema({
    itemName: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    price:{
        type: String,
        required:true,
    },
    brand:{
        type: String,
        required:true
    },
    dateEntered:{
        type: String,
        required:true
    }
})

module.exports= mongoose.model('Products', ProductsSchema)
