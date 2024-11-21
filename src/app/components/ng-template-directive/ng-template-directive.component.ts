import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-template-directive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-template-directive.component.html',
  styleUrl: './ng-template-directive.component.css'
})
export class NgTemplateDirectiveComponent {
isUserLogedin : boolean  = true;
LogeduserName : string = 'Ganesh';
}
