import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewItemComponent } from './add-new-item/add-new-item.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'homepage', component:HomepageComponent},
  {path:'productList', component:ProductListComponent},
  {path:'userList', component:UserComponent},
  {path:'addNewItem', component:AddNewItemComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
