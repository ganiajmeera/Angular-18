import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {

  dayNumber : string ="";
  cityArray : string [] = ['pune','hyderbad','mumbai','delhi'];

  studentList:any[]=[
    {studentid : 12, name : 'AAA' , city : 'hyd', isActive : false},
    {studentid : 23, name : 'BBB' , city : 'mumbai', isActive : false},
    {studentid : 34, name : 'CCC' , city : 'warangal', isActive : true},
    {studentid : 45, name : 'DDD' , city : 'hyd', isActive : false},
    {studentid : 56, name : 'EEE' , city : 'pune', isActive : false},
    {studentid : 67, name : 'FFF' , city : 'chennai', isActive : false}]
}

