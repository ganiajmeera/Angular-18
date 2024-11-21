import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  // string,number,boolean,data

  courseName :string =" Angular18";
  
  stringName : string ="Assam";

  inputType = "radio"; // Variable declaration with type.

  rollnumber = 9824; // rollnumber :number = 9824

  isIndian = true;   // isIndian : boolean = true;
  
  myClassName :string = "bg-primary";

  currentDate: Date = new Date(); 


  firstName = signal("Ganesh Ajmeera");

  constructor(){

  }
  changeCourseName(){
    this.courseName = "React Js";
    this.firstName.set("Dinesh Ajmeera");
  }
  showAlert(message :string){
     alert(message)
  }

}
