import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
 selector:'app-root',
 standalone:true,
 imports:[CommonModule,FormsModule],
 templateUrl:'./app.html'
})
export class AppComponent{

 categories:any=[];
 products:any=[];
 page=1;

 catName='';
 prodName='';
 catId='';

 constructor(private api:ApiService){
  this.load();
 }

 load(){
  this.api.getCategories().subscribe((r:any)=>this.categories=r);
  this.api.getProducts(this.page).subscribe((r:any)=>this.products=r);
 }

 addCategory(){
  this.api.addCategory({name:this.catName}).subscribe(()=>{
   this.catName='';
   this.load();
  });
 }

 addProduct(){
  this.api.addProduct({name:this.prodName,category_id:this.catId}).subscribe(()=>{
   this.prodName='';
   this.page=1;
   this.load();
  });
 }

 removeProduct(id:any){
 this.api.deleteProduct(id).subscribe(()=>{
  // remove row locally from table
  this.products = this.products.filter((p:any)=>p.ProductId !== id);
 });
}




 next(){
  this.page++;
  this.load();
 }
}
