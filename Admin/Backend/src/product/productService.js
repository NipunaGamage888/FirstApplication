var productModel = require('./productModel')

module.exports.createProductService = (product) => {
 
 
    return new Promise(function myFn(resolve, reject) {
  
        var productModelData = new productModel();
  
        productModelData.itemName = product.itemName;
        productModelData.stock = product.stock;
        productModelData.price = product.price;
        productModelData.brand= product.brand;
        productModelData.dateEntered=product.dateEntered
        
        
  
        productModelData.save(function resultHandle(error, result) {
  
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
  
    });
  
 }

 module.exports.getProductFromDbService=()=>{
    return new Promise(function checkUrl(resolve, reject){
        productModel.find({}, function returnData(error,result){
            if(error){
                reject(false)
            }else{
                resolve(result)
            }
        })
    })
}
 