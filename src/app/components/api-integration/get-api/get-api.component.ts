import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlertComponent } from "../../../reusable/alert/alert.component";

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [HttpClientModule,],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

userList:any[]=[]; // for storing array

ganiList:any[] =[];
constructor(private http: HttpClient){

}

getUserAll(){
  debugger;
  this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
    debugger;
    this.userList=result;
    })
}
getCustomer(){
  debugger;
  this.http.get("https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers").subscribe((res:any)=>{
    debugger;
  this.ganiList=res.data;
  })
}
}
