import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
 providedIn:'root'
})
export class ApiService{

 url="http://localhost:3000";

 constructor(private http:HttpClient){}

 getCategories(){
  return this.http.get(this.url+"/categories");
 }

 addCategory(data:any){
  return this.http.post(this.url+"/categories",data);
 }

 deleteCategory(id:any){
  return this.http.delete(this.url+"/categories/"+id);
 }

 getProducts(page:number){
  return this.http.get(this.url+"/products?page="+page);
 }

 addProduct(data:any){
  return this.http.post(this.url+"/products",data);
 }

 deleteProduct(id:any){
  return this.http.delete(this.url+"/products/"+id);
 }
}
