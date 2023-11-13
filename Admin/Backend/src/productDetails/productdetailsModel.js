var mongoose  = require("mongoose");
const Schema = mongoose.Schema

var productDetailsSchema = new Schema({
    itemName:{
        type:String,
        required:true
    },
    itemImage:{
        type:String,
        required:true,
    },
    itemCategory:{
        type:String,
        required:true,
    },
    unhealthyIngredients:{
        type:String,
        required:true
    },
    proteins:{
        type:String,
        required:true
    },
    fats:{
        type:String,
        required:true
    },
    carbohydrates:{
        type:String,
        required:true
    },
    calories:{
        type:String,
        required:true
    },
    healthy:{
        type:String,
        required:true
    },
    substitute:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('productDetails', productDetailsSchema) 
