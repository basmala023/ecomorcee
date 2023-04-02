import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService,
    private _Router:Router){}
    isLOading:boolean=false;
    apiErr:string='';

  registerForm:FormGroup= new FormGroup({
    name:new FormControl(null, [Validators.required, Validators.minLength(3),Validators.maxLength(3)]),
    email:new FormControl(null, [Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z][0-9]{4,8}$/)]),
    rePassword:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z][0-9]{4,8}$/)]),
    phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)])
  })
  handle(registerForm:FormGroup){
    this.isLOading=true;
    if(registerForm.valid){
      console.log(registerForm.value)
      this._AuthService.register(registerForm.value).subscribe({
        next:(response)=>{
          console.log(response)
          
          if(response.message==='success'){
            this.isLOading=false;
            this._Router.navigate(['/login'])
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
