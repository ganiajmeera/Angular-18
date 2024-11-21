import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructuralDirComponent } from './components/directives/structural-dir/structural-dir.component';
import { AttributeDirectiveComponent } from './components/directives/attribute-directive/attribute-directive.component';
import { DeletePutApiComponent } from './components/api-integration/delete-put-api/delete-put-api.component';
import { GetApiComponent } from './components/api-integration/get-api/get-api.component';
import { PostApiComponent } from './components/api-integration/post-api/post-api.component';
import { ForComponent } from './components/for/for.component';
import { ReactiveComponent } from './components/forms/reactive/reactive.component';
import { TemplateComponent } from './components/forms/template/template.component';
import { IfelseComponent } from './components/ifelse/ifelse.component';
import { AlertComponent } from './reusable/alert/alert.component';
import { MybuttonComponent } from './reusable/mybutton/mybutton.component';
import { CycleEventsComponent } from './life-cycle-event/cycle-events/cycle-events.component';
import { LoginComponent } from './components/Admin-page/login/login.component';
import { LayoutComponent } from './components/Admin-page/layout/layout.component';
import { authGuard } from './service/auth.guard';

export const routes: Routes = [
    // default router.
    {
        path : '',
        redirectTo :'login',
        pathMatch : 'full'
    },
    {
        path : 'login',
        component:LoginComponent
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path : 'add-emp',
                component : AddEmployeeComponent
            },
            {
                path :'DataBinding',
                component : DataBindingComponent
            },
            {
                path : 'str-Dir',
                component : StructuralDirComponent
            },
            {
                path : 'attri-Dir',
                component : AttributeDirectiveComponent
            },
            {
                path : 'app-delete-put-api',
                component : DeletePutApiComponent,
                canActivate:[authGuard]
            },
            {
                path : 'app-get-api',
                component : GetApiComponent
            },
            {
                path : 'app-post-api',
                component : PostApiComponent
            },
            {
                path :'app-for' ,
                component : ForComponent
            },
            {
                path : 'app-reactive',
                component : ReactiveComponent
            },
            {
                path : 'app-template',
                component : TemplateComponent
            },
            {
                path : 'app-ifelse',
                component : IfelseComponent
            },
            {
                path : 'app-alert',
                component : AlertComponent
            },
            {
                path : 'app-mybutton',
                component : MybuttonComponent
            },
            {
                path :'app-cycle-events',
                component : CycleEventsComponent
            }
        
        ]
    }
    
];
