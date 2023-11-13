const { model } = require('mongoose')
var adminService= require('./adminService')

var postAdminControllerFn= async(req,res)=>{

    try{
        console.log(req.body)
        const status = await adminService.createAdminService(req.body)
        console.log(status)

        if(status){
            res.send({"status":true, "message":"Admin Logged in"})
        }else{
            res.send({"status":false, "message":"Admin Error"})
        }
    } catch(err){
            console.log(err)

    }
} 
var loginAdminControllerFn = async (req, res) => {
    var result = null;
    try {
        result = await adminService.loginAdminDBService(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg })
        } else {
            res.send({ "status": false, "message": result.msg });
        }
 
    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}

var profileAdminControllerFn=async(req,res)=>{
    var admin= await adminService.getDataFromDBservice();
    res.send({"status":true, "data":admin})
}

module.exports={postAdminControllerFn, profileAdminControllerFn,loginAdminControllerFn}