import { Component ,OnInit,DoCheck,AfterViewInit,AfterContentChecked,AfterContentInit,OnChanges, SimpleChanges,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-cycle-events',
  standalone: true,
  imports: [],
  templateUrl: './cycle-events.component.html',
  styleUrl: './cycle-events.component.css'
})
export class CycleEventsComponent implements OnInit,DoCheck,AfterViewInit,AfterContentChecked,AfterContentInit,OnChanges,OnDestroy{

  firstName : string;
  constructor(){
    console.log('constructor');
    this.firstName ='';
  }
  ngOnInit(): void {
    console.log('ngOninit');
  }
  ngDoCheck(): void {
    console.log('ngDocheck');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnchanges');
  }
  ngOnDestroy(): void {
    console.log('ngOndistroy');
  }
}
