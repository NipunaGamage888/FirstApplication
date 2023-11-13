import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-navigatebar',
  templateUrl: './navigatebar.component.html',
  styleUrls: ['./navigatebar.component.css']
})
export class NavigatebarComponent {
  isShowing: boolean | undefined;

  constructor(private router: Router){}

  toggleSidenav() {
    this.isShowing = !this.isShowing;
  }

  callMethods() {
      this.toggleSidenav();
  }
  logout(){
    window.localStorage.removeItem("loggedinuser") 
    this.router.navigateByUrl('/')
  }
}
