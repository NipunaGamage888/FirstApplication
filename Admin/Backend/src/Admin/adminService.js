var adminModel= require('./adminModel')
var jwt= require('jsonwebtoken')
var key = '123456789trytryrtyr';
var encryptor= require('simple-encryptor')(key)

module.exports.createAdminService=(admin)=>{

    return new Promise(function myFn(resolve,reject){
        
        var adminModelData= new adminModel()

        adminModelData.userName=admin.userName;
        adminModelData.password=admin.password
        var encrypted= encryptor.encrypt(admin.password);
        adminModelData.password=encrypted;
        adminModelData.email=admin.email

        adminModelData.save(function resultHandle(error,result){
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        })

    })
}

module.exports.loginAdminDBService = (adminDetails)=>
{
   let userFound;
   return new Promise(function myFn(resolve, reject)
   {
      adminModel.findOne({ email: adminDetails.email},function getresult(errorvalue, result)
      {
         if(errorvalue)
         {
            reject({status: false, msg: "Invaild Data"});
         }
         else
         {
            if(result !=undefined &&  result !=null)
            {
               var decrypted = encryptor.decrypt(result.password);
 
               if(decrypted== adminDetails.password)
               {
                  resolve({status: true,msg: "Student Validated Successfully"});
                  userFound=result
               }
               else
               {
                  reject({status: false,msg: "Student Validated failed"});
               }
               
               
            }
            else
            {
               reject({status: false,msg: "Student Error Detailssss"});
            }
 
         }
      
      });
      
   });
}

module.exports.getDataFromDBservice=()=>{
   return new Promise(function checkURL(resolve, reject){
      adminModel.find({}, function returnData(error, result){
         if(error){
            reject(false)
         }else{
            resolve(result)
         }
      })
   })
   
}