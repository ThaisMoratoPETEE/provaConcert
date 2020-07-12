import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import {HttpClient} from '@angular/common/http'
import {Client} from './client.model'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
  baseUrl = "http://localhost:3000/clients"
  
  constructor(private snackBar: MatSnackBar, private http: HttpClient ) {}
  
  showMessage(msg: string): void{
	  this.snackBar.open(msg, 'ok', {
		  duration: 3000,
		  horizontalPosition: "center",
		  verticalPosition: "top"
	  })
  }
  
  create(client: Client): Observable<Client> {
	  return this.http.post<Client>(this.baseUrl, client);
  }
  
  read(): Observable<Client[]>{
	  return this.http.get<Client[]>(this.baseUrl);
  }
  
  getById(id: string): Observable<Client>{
	  const url = `${this.baseUrl}/${id}`;
	  return this.http.get<Client>(url);
  }
  
  update(client: Client): Observable<Client>{
	   const url = `${this.baseUrl}/${client.id}`;
	  return this.http.put<Client>(url, client);
  }
  
  delete(id: number): Observable<Client>{
	  const url = `${this.baseUrl}/${id}`;
	  return this.http.delete<Client>(url);
  }
}
