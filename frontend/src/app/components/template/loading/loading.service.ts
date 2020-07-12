import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  
  mostrarLoading: boolean = false;
  
  constructor() { }
  
  carregarPg() {
		this.mostrarLoading = true;
		setTimeout(() => {
			this.mostrarLoading = false;
		}, 2000);
	}
  
}
