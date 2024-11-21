import { HttpClient } from '@angular/common/http';
import { Component, inject, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
userObj : any ={
  EmailId:'',
  Password :'',
}
router = inject(Router)
http = inject(HttpClient)
Onlogin(){
  debugger;
  this.http.post('https://projectapi.gerasim.in/api/UserApp/login',this.userObj).subscribe((res:any)=>{
    if(res.result){
      alert('Login successfull');
      debugger;
      localStorage.setItem('loginUser',JSON.stringify(res.data))
     this.router.navigateByUrl('add-emp')
    }else{
      alert(res.message)
    }
  })

//  if(this.userObj.userName == 'Admin' && this.userObj.password == '1234'){
//   debugger;
//   alert('Login is Successful')
//   localStorage.setItem('loginUser',this.userObj.userName)
//   this.router.navigateByUrl('add-emp')
//  }else{
//   alert('Given Credentials are Invalid')
//  }
   
}
}
