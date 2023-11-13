var userModel = require('./userModel')

module.exports.getDataFromDBService=()=>{
    return new Promise(function checkUrl(resolve, reject){
        userModel.find({}, function returnData(error,result){
            if(error){
                reject(false)
            }else{
                resolve(result)
            }
        })
    })
}