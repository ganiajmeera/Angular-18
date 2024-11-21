import { Component, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import { AlertComponent } from '../../reusable/alert/alert.component';
import { AttributeDirectiveComponent } from "../directives/attribute-directive/attribute-directive.component";
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [AlertComponent, AttributeDirectiveComponent],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent implements AfterViewInit{

  @ViewChild('text') textbox? :ElementRef;
  @ViewChild(AppComponent) content? : AppComponent
  ngAfterViewInit(): void {
    const value = this.textbox?.nativeElement.value
    const input =  this.content?.title;
    debugger;
  }
}
