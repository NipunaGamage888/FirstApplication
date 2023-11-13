import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.css']
})
export class AddNewItemComponent {

  constructor(private http: HttpClient){
    
  };

  formData={
    itemImage:null
  }
  itemName:String=""
  itemImage:string=""
  itemCategory:String=""
  unhealthyIngredients:String=""
  proteins:String=""
  fats:String=""
  carbohydrates:String=""
  calories:String=""
  healthy:String=""
  substitute:String=""


//option(event:any){
//  this.itemCategory=event.target.value
 // console.log(this.itemCategory)
//}


itemNamec= new FormControl('',[
  Validators.required
])

itemImagec= new FormControl('',[
  Validators.required
])

itemCategoryc= new FormControl('',[
  Validators.required
])

ingredientsc= new FormControl('',[
  Validators.required
])

proteinsc= new FormControl('',[
  Validators.required
])

fatsc= new FormControl('',[
  Validators.required
])

carbsc= new FormControl('',[
  Validators.required
])

caloriesc= new FormControl('',[
  Validators.required
])

healthyc= new FormControl('',[
  Validators.required
])
substitutec= new FormControl('',[
  Validators.required
])

selectImage(event: any) {
  const reader = new FileReader();
  reader.onload = () => {
    this.itemImage = reader.result as string;
    // call a function to save the base64Image to MongoDB
  };
  reader.readAsDataURL(event.target.files[0]);
}

getregister(){
  let bodydata={
    "itemName":this.itemName,
    "itemImage":this.itemImage,
    "itemCategory":this.itemCategory,
    "unhealthyIngredients":this.unhealthyIngredients,
    "proteins":this.proteins,
    "fats":this.fats,
    "carbohydrates":this.carbohydrates,
    "calories":this.calories,
    "healthy":this.healthy,
    "substitute":this.substitute
  };
  this.http.post("http://localhost:8000/productsDetails/createdata", bodydata).subscribe((resultData:any)=>
  {
    console.log(resultData);
    alert('Product was Successfully Entered')
  }) 
}

save(){
  this.getregister()
  this.itemCategoryc.reset()
  this.ingredientsc.reset()
  this.itemNamec.reset()
  this.healthyc.reset()
  this.ingredientsc.reset()
  this.itemImagec.reset()
  this.caloriesc.reset()
  this.carbsc.reset()
  this.proteinsc.reset()
  this.substitutec.reset()
  this.fatsc.reset()
  
}
}
