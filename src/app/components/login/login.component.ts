import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService,
    private _Router:Router){}
    isLOading:boolean=false;
    apiErr:string='';

  loginForm:FormGroup= new FormGroup({
   
    email:new FormControl(null, [Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z][0-9]{4,8}$/)]),
    
  })
  handle(loginForm:FormGroup){
    this.isLOading=true;
    if(loginForm.valid){
      console.log(loginForm.value)
      this._AuthService.login(loginForm.value).subscribe({
        next:(response)=>{
          console.log(response)
          
          if(response.message==='success'){
            localStorage.setItem('userToken', response.token);
            this._AuthService.decoseUserData();
            this.isLOading=false;
            this._Router.navigate(['/home'])
          }
        },
        error:(err)=>{
          this.isLOading=false
          console.log(err.error.message);
          this.apiErr=err.error.message
        }
        
      })
    }
    
  
  }

}
