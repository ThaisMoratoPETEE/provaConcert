import { Injectable, EventEmitter } from '@angular/core';
import {Usuario} from './user.model'
import {Router} from '@angular/router'
import {MatSnackBar} from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private usuarioAutenticado: boolean = false;
  
  constructor(private router: Router, private snackBar: MatSnackBar) { }
  
  mostrar = new EventEmitter<boolean>();
  
  autenticar(user: Usuario){
	  if(user.name === 'concert' && user.pw === 'prova'){
		  this.usuarioAutenticado = true;
		  this.mostrar.emit(true);
		  this.router.navigate(['/']);
		  this.showMessage("Login efetuado com sucesso.");
	  } else{
		  this.usuarioAutenticado = false;
		  user.name='';
		  user.pw='';
		  this.showMessage("Usuário ou senha incorretos.");
		  this.mostrar.emit(false);
	  }
  }
  
  showMessage(msg: string): void{
	  this.snackBar.open(msg, '', {
		  duration: 1500,
		  horizontalPosition: "center",
		  verticalPosition: "top"
	  })
  }
  
}
