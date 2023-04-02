import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BrandsComponent } from './components/brands/brands.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:'' ,redirectTo:'home',pathMatch:'full' },
  {path:'home',canActivate:[AuthGuard] ,component:HomeComponent },
  {path:'cart', canActivate:[AuthGuard],component:CartComponent },
  {path:'productdetails/:id',canActivate:[AuthGuard],component:ProductdetailsComponent},
  {path:'categories',canActivate:[AuthGuard] ,component:CategoriesComponent },
  {path:'products',canActivate:[AuthGuard] ,component:ProductsComponent },
  {path:'barnds',canActivate:[AuthGuard] ,component:BrandsComponent },
  {path:'login' ,component:LoginComponent },
  {path:'register' ,component:RegisterComponent },
  {path:'**' ,component:NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
