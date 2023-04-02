import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private HttpClient:HttpClient) { }


  getProducts(): Observable<any>{
   return this.HttpClient.get("https://route-ecommerce.onrender.com/api/v1/products")

  }
  getProductSetails(id:string):Observable<any>{
    return this.HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`)

  }
  getCategories():Observable<any>{
    return this.HttpClient.get("https://route-ecommerce.onrender.com/api/v1/categories")
  }
}
