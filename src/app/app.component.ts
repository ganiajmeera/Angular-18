import { Component, viewChild } from '@angular/core';
import { PipeComponent } from './components/pipe/pipe.component';
import { TemplateComponent } from './components/forms/template/template.component';
import { ReactiveComponent } from './components/forms/reactive/reactive.component';
import { ForComponent } from './components/for/for.component';
import { StructuralDirComponent } from './components/directives/structural-dir/structural-dir.component';
import { MoviesComponent } from './components/movies/movies.component';
import { GetApiComponent } from './components/api-integration/get-api/get-api.component';
import { PostApiComponent } from './components/api-integration/post-api/post-api.component';
import { DeletePutApiComponent } from './components/api-integration/delete-put-api/delete-put-api.component';
import { AlertComponent } from './reusable/alert/alert.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CycleEventsComponent } from "./life-cycle-event/cycle-events/cycle-events.component";
import { NgTemplateDirectiveComponent } from './components/ng-template-directive/ng-template-directive.component';
import { NgComponentComponent } from './components/ng-component/ng-component.component';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { LoginComponent } from './components/Admin-page/login/login.component';
import { authGuard } from './service/auth.guard';
import { MybuttonComponent } from "./reusable/mybutton/mybutton.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TemplateComponent, ReactiveComponent, ForComponent, StructuralDirComponent, MoviesComponent, GetApiComponent,
    PostApiComponent, DeletePutApiComponent, AlertComponent, RouterLink, RouterOutlet, CycleEventsComponent, NgTemplateDirectiveComponent, NgComponentComponent, ViewChildComponent,
    LoginComponent, MybuttonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Gani818';
}
