import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component ,inject,OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../../service/department.service';
import { MybuttonComponent } from '../../../reusable/mybutton/mybutton.component';

@Component({
  selector: 'app-delete-put-api',
  standalone: true,
  imports: [FormsModule,JsonPipe,MybuttonComponent],
  templateUrl: './delete-put-api.component.html',
  styleUrl: './delete-put-api.component.css'
})
export class DeletePutApiComponent implements OnInit{

  deptObj : any = {
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": "" 
};
deptList : any [] = [];

http = inject(HttpClient);

constructor(private deptSrv :DepartmentService){
  debugger;
const result = this.deptSrv.addTwoNum(38,40)
}

// Onsave(){
//   debugger;
// this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",this.deptObj).subscribe((res:any)=>{
// debugger;
// if(res.result){
//   alert ("Department Created Succesfully");
//   this.getDepartments();
// }else{
//   alert(res.message);
// }
// })
// }

Onsave(){
  this.deptSrv.OnNewsave(this.deptObj).subscribe((res:any)=>{
    debugger;
    if(res.result){
        alert ("Department Created Succesfully");
        debugger
        this.getDepartments();
      }else{
        alert(res.message);
      }
      })
}
OnUpadate(){
  debugger;
  this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment",this.deptObj).subscribe((res:any)=>{
  debugger;
  if(res.result){
    alert ("Department Updated Succesfully");
    this.getDepartments();
  }else{
    alert(res.message);
  }
  })
}

onDelete(id:number){
  const isDelete = confirm("Are You sure want to delete")
  debugger;
  this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId="+id).subscribe((res:any)=>{
  debugger;
  if(res.result){
    alert ("Department Deleted Succesfully");
    this.getDepartments();
  }else{
    alert(res.message);
  }
  })
}
// getDepartments(){
//  this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res:any)=>{
// this.deptList = res.data;
//  }) 
// }
onEdit(data:any){
  this.deptObj=data;
}

getDepartments(){
  debugger;
  this.deptSrv.getAllDept().subscribe((res:any)=>{
    debugger;
    this.deptList= res.data
  })
}

ngOnInit():void{
  this.getDepartments()
  }
  }


