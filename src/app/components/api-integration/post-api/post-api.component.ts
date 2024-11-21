import { HttpClient } from '@angular/common/http';
import { Component, inject,OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from "../../../reusable/alert/alert.component";

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule, ],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {

  deptObj : any = {
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": "" 
  };
  deptList : any [] = [];

http = inject(HttpClient);

Onsave(){
    debugger;
 this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",this.deptObj).subscribe((res:any)=>{
 debugger;
  if(res.result){
    alert ("Department Created Succesfully");
  }else{
    alert(res.message);
  }
 })
  }

  getDepartments(){
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res:any)=>{
   this.deptList = res.data;
    }) 
   }

  ngOnInit():void{
    this.getDepartments();
    }
}

