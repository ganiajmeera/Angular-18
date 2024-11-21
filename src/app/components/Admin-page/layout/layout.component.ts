import { jsDocComment } from '@angular/compiler';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  loggedUserData : any;
  constructor(){
    const loggedData = localStorage.getItem('loginUser');
    if(loggedData != null){
      this.loggedUserData = JSON.parse(loggedData)
    }

  }

  router =inject(Router);
  logoff(){
    localStorage.removeItem('EmailId');
  this.router.navigateByUrl('login')
  }
}
