var userService= require('./userService')

var getDataControllerFn=async(req,res)=>{
    var userdetails= await userService.getDataFromDBService();
    res.send({"status":true, "data":userdetails})
}

module.exports={getDataControllerFn}