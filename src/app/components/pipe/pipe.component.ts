import { AsyncPipe, CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from '../Custom-pips/na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [NaPipe,AsyncPipe,UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,CurrencyPipe,JsonPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  firstName : string ="angular";
  secondName :string ="React-Version"
  thirdName : string ="angular is very clumgy we don't know how to make it understood"
  currency : string ="$100";
 curentDate : Date = new Date();

 student :any ={
  name:'Ganesh',
  class : '10th',
  Id : 2456,
  state: null
}

currentTime : Observable<Date> = new Observable<Date>

constructor(){
  this.currentTime = interval(1000).pipe(map(()=>new Date));
}
}
