import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit{
  constructor(private _ActivatedRoute:ActivatedRoute,
    private _ProductsService:ProductsService){}
    
    productDetails:any;
    productId:any;
  ngOnInit():void{
    this._ActivatedRoute.paramMap.subscribe((params)=>{
      console.log(params.get('id'));
      this.productId= params.get('id')
    })
    this._ProductsService.getProductSetails(this.productId).subscribe({
      next:(response)=>{
        console.log(response.data)
        this.productDetails=response.data
      }
    })
  }
 
    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
      },
      nav: true
    }
  
  

}

