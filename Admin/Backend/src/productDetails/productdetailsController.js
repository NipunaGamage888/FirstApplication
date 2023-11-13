var productDetailService = require('./productdetailsService')


var postProductDetailControllerFn =async(req,res)=>{
    
    try{
        console.log(req.body)
        var status = await productDetailService.createProductDetailService(req.body)
        console.log(status)

        if(status){
            res.send({"status":true, "message": "Details are successfully entered"})
        }else{
            res.send({"status":false, "message": "Unsuccesfull"})
        }
    }catch(err){
        console.log(err)
    }
}
var getProductDetailsControllerFn= async(req,res)=>{
    var productDetails= await productDetailService.getProductDetailsFromDbService()
    res.send({"status":true,  "data":productDetails})
}
module.exports={postProductDetailControllerFn, getProductDetailsControllerFn}