import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-ng-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-component.component.html',
  styleUrl: './ng-component.component.css'
})
export class NgComponentComponent {
iscontainer : boolean = true;

http = inject(HttpClient);

userList : any[] =[];
isApi : boolean =false;
getUser(){
  this.isApi =true;
  this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((Res:any)=>{
this.userList = Res;
this.isApi = false;
  })
}
}
