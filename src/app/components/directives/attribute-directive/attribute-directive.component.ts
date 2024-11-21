import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {
    div1Bgcolor : string ='bg-primary';
    
    addredClass(){
      this.div1Bgcolor = "bg-danger"
    }
   addblueClass(){
    this.div1Bgcolor = "bg-primary"
   }
   isdiv2Active :boolean =true;

   istoggle(){
    this.isdiv2Active = !this.isdiv2Active
   }

   num1 : string =" ";
   num2 : string = " ";

   isActive : boolean =false;

   studentList:any[]=[
  {studentid : 12,totalMarks:99, gender:'male', name : 'AAA' , city : 'hyd', isActive : false},
  {studentid : 23,totalMarks:78, gender:'female',name : 'BBB' , city : 'mumbai', isActive : false},
  {studentid : 34,totalMarks:89, gender:'male',name : 'CCC' , city : 'warangal', isActive : true},
  {studentid : 45,totalMarks:95, gender:'male',name : 'DDD' , city : 'hyd', isActive : false},
  {studentid : 56,totalMarks:68, gender:'female',name : 'EEE' , city : 'pune', isActive : false},
  {studentid : 67,totalMarks:70, gender:'female', name : 'FFF' , city : 'chennai', isActive : true}]


 customerStyle : any ={
  'color' : 'white',
  'backgroud-color' : 'blue',
  'width' : '200px',
  'height' : '200px',
  'border-radius' : '50%'
 } 
}
