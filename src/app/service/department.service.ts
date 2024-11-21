import { HttpClient } from '@angular/common/http';
import { Injectable,} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService  {

  constructor(private http:HttpClient) { }

  apiUrl:string ="https://projectapi.gerasim.in/api/Complaint/";

  getAllDept(){
    debugger;
    return this.http.get(this.apiUrl + "GetParentDepartment");    // Concritination
  }

  OnNewsave(obj : any){
    debugger;
    return this.http.post(`${this.apiUrl}"AddNewDepartment`,obj);   // Template Literals
  }

  addTwoNum (num1:number,num2:number){
    debugger;
    return num1+num2;
  }
}
