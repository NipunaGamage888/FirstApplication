import { Component } from '@angular/core';
import {faPlusSquare} from '@fortawesome/free-regular-svg-icons'
import { FormControl,Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  
  productArray:any[]=[]


  stock:String=""
  brand:String=""
  price:String=""
  itemName:String=""

  constructor(
    private dialog:MatDialog, private http:HttpClient
  ){
    this.getallproducts()
  }
  faSquare= faPlusSquare

  headers=['Name', 'Stock', 'Price', 'Brand', 'Add']


    getallproducts(){
      
      this.http.get('http://localhost:8000/product/getAll').subscribe((resultData:any)=>{
        this.productArray=resultData.data;
      })
    }
 

stockc= new FormControl('',[
  Validators.required,
])
onCreate(){
  const dialogConfig= new MatDialogConfig
  dialogConfig.disableClose=true;
  dialogConfig.autoFocus=true;
  dialogConfig.width="50%";
  dialogConfig.hasBackdrop=true
  this.dialog.open(PopupComponent,dialogConfig)
}
}

