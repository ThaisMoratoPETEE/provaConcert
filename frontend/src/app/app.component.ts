import { Component } from '@angular/core';
import { AuthService } from './views/login/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'

})
export class AppComponent {
	mostrarConteudo: boolean = false;

	constructor(private authService: AuthService){
		
	}
	
	ngOnInit(){
		this.authService.mostrar.subscribe(
			validacao => this.mostrarConteudo = validacao
		);
	}
	
}
