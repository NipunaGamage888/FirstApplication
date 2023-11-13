const express = require('express')
const app = express()
const mongoose = require('mongoose');
app.use(express.json())
mongoose.set('strictQuery', false)
var routes = require('./routes/routes')
const cors=require('cors')
app.use(cors());
const multer = require('multer');
const fs= require('fs')
const path= require('path')
const Image = require('../Backend/src/productDetails/productdetailsModel')


app.use(cors({
    origin:"http://localhost:4200"
}))

app.listen(8000,function check(error){
    if(error){
        console.log("error")
    }else{
        console.log("server is running")
    }
});

mongoose.connect("mongodb://127.0.0.1:27017/FinalProject",
{useNewUrlParser: true, useUnifiedTopology:true},
function checkDb(error){
    if (error){
        console.log('Error')
    }else{
        console.log('DB Connected')
    }
})

app.use(routes)



 





