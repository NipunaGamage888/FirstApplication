var productDetailModel= require('../productDetails/productdetailsModel')

module.exports.createProductDetailService=(productDetails)=>{
    return new Promise(function myFn(resolve,reject){

      var productDetailsModelData = new productDetailModel();

      productDetailsModelData.itemName = productDetails.itemName;
      productDetailsModelData.itemImage = productDetails.itemImage
      productDetailsModelData.itemCategory = productDetails.itemCategory;
      productDetailsModelData.unhealthyIngredients= productDetails.unhealthyIngredients;
      productDetailsModelData.proteins= productDetails.proteins;
      productDetailsModelData.carbohydrates= productDetails.carbohydrates;
      productDetailsModelData.fats= productDetails.fats;
      productDetailsModelData.calories= productDetails.calories;
      productDetailsModelData.healthy= productDetails.healthy;
      productDetailsModelData.substitute= productDetails.substitute;
      


      productDetailsModelData.save(function resulthandle(error,result){
            if (error){
                reject(false)
            }else{
                resolve(true)
            }
      })

    })
}

module.exports.getProductDetailsFromDbService=()=>{
    return new Promise(function checkUrl(resolve, reject){
        productDetailModel.find({}, function returnData(error,result){
            if(error){
                reject(false)
            }else{
                resolve(result)
            }
        })
    })
}
