import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ifelse',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {

div1Visible : boolean = true;
iswarningDiv2Visble : boolean = false;
num1:string ="";
num2 :string="";
selectedstatus : string=" ";
showDiv1(){
 this.div1Visible = true;
}
hideDiv1(){
  this.div1Visible = false;
}
toggleDiv2(){
this.iswarningDiv2Visble =!this.iswarningDiv2Visble
}

}
