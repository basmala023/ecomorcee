import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable,BehaviorSubject} from 'rxjs'
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
userData=new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient,
    private _Router:Router) {
      if(localStorage.getItem('userToken')!==null){
        this.decoseUserData()
      }

   }
   decoseUserData(){
    let encodedToken= JSON.stringify(localStorage.getItem('userToken'));
    let decoded:any = jwtDecode(encodedToken);
    console.log(decoded);
    this.userData.next (decoded);
   }
   logOut(){
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login'])
   }
   register(userData:object):Observable<any>{
   return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signup',userData)
   }
   login(userData:object):Observable<any>{
    return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signin',userData)
    }
}
