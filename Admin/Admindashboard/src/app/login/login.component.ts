import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl,Validators } from '@angular/forms'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string="";
  password: string="";

  isLogin:boolean=true;
  errormessage: string=""

  constructor(private router: Router, private http:HttpClient){

    
  }
  login(){

    let bodyData={
      email:this.email,
      password:this.password
    };

    this.http.post("http://localhost:8000/admin/login",bodyData).subscribe((resultData:any)=>{
      console.log(resultData);

      if(resultData.status){
        window.localStorage.setItem("loggedinuser", bodyData.email)
        // window.localStorage.removeItem("loggedinuser") TODO: add this code for logout
        this.router.navigateByUrl('/homepage')
      }else{
        alert('Email Or Password Does not Match')
        console.log('Incorrect')
      }
    })

  }

  emailc= new FormControl('', [
    Validators.required,
    Validators.email
  ])

  passwordc = new FormControl('', [
    Validators.required,
    Validators.minLength(4)
  ])
}
