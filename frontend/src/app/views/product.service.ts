import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import {HttpClient} from '@angular/common/http'
import {Product} from './product.model'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  baseUrl = "http://localhost:3000/products"
  
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  
  showMessage(msg: string, time: number): void{
	  this.snackBar.open(msg, 'ok', {
		  duration: time,
		  horizontalPosition: "center",
		  verticalPosition: "top"
	  })
  }
  
  create(product: Product): Observable<Product> {
	  return this.http.post<Product>(this.baseUrl, product);
  }
  
  read(): Observable<Product[]>{
	  return this.http.get<Product[]>(this.baseUrl);
  }
  
  getById(id: string): Observable<Product>{
	  const url = `${this.baseUrl}/${id}`;
	  return this.http.get<Product>(url);
  }
  
  delete(id: number): Observable<Product>{
	  const url = `${this.baseUrl}/${id}`;
	  return this.http.delete<Product>(url);
  }
  
  update(product: Product): Observable<Product>{
	   const url = `${this.baseUrl}/${product.id}`;
	  return this.http.put<Product>(url, product);
  }
  
}
