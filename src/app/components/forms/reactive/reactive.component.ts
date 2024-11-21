import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { AlertComponent } from "../../../reusable/alert/alert.component";
import { MybuttonComponent } from "../../../reusable/mybutton/mybutton.component";

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, AlertComponent, MybuttonComponent],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {
studentForm :FormGroup = new FormGroup({
  firstName : new FormControl("",[Validators.required,Validators.minLength(4)]),
  lastName  : new FormControl(""),
  userName  : new FormControl("",[Validators.email]),
  city      : new FormControl(""),
  state     : new FormControl(""),
  zip       : new FormControl("")
})

formVariable : any = "";
submit(){
  debugger;
  this.formVariable = this.studentForm.value
}
reset : any ='';
Reset(){
this.reset = this.studentForm
}
}
