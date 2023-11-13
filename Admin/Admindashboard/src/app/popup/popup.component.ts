import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  constructor(
    private http: HttpClient,
    private dialog: MatDialog
  ){}

  stock:String=""
  brand:String=""
  price:String=""
  itemName:String=""
  dateEntered:String=""

  stockc= new FormControl('',[
    Validators.required
  ])
  brandc= new FormControl('',[
    Validators.required
  ])

  pricec= new FormControl('',[
    Validators.required
  ])

  itemNamec= new FormControl('',[
    Validators.required
  ])

  dateEnteredc= new FormControl('',[
    Validators.required
  ])

  enterProduct(){
    let bodydata={
      "stock":this.stock,
      "brand":this.brand,
      "price":this.price,
      "itemName":this.itemName,
      "dateEntered":this.dateEntered
    }
    this.http.post("http://localhost:8000/products/createdata",bodydata).subscribe((resultData:any)=>{
      console.log(resultData)
      alert("Product is Entered")
    })
    
  }
  onSubmit(){
    this.enterProduct()
    this.dialog.closeAll()
  }
  onClose(){
    this.dialog.closeAll()
  }
}
