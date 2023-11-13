var productService = require('../product/productService')



var postProductControllerFn= async (req,res)=>{
    try{
        console.log(req.body);
        var status = await productService.createProductService(req.body);
        console.log(status);
        
        if(status){
            res.send({"status":true, "message":"Product Created Successfully"})
        }else{
            res.send({"status":false, "message":"Product Error"})
        }
    }
    catch(err){
        console.log(err)
    }
    
}
getProductControllerFn= async(req,res)=>{
    var product = await productService.getProductFromDbService()
    res.send({"status":true, "data":product})
}

module.exports={postProductControllerFn, getProductControllerFn}