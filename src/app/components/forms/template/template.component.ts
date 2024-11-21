import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from "../../../reusable/alert/alert.component";
import { MybuttonComponent } from "../../../reusable/mybutton/mybutton.component";

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [FormsModule, JsonPipe, AlertComponent, MybuttonComponent],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {

  studentObj :any ={
    firstName :"",
    lastName :"",
    userName :"",
    city:"",
    state:"",
    Zip:"",
    isActive :false
  }
forValue : any;
  onSubmit(){
  debugger;
  this.forValue = this.studentObj
  }
Reset(){
  this.studentObj ={
    firstName :"",
    lastName :"",
    userName :"",
    city:"",
    state:"",
    Zip:"",
    isActive :false
  }
}

}
