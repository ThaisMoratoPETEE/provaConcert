import { Component, OnInit } from '@angular/core';
import { ClientService } from './../client.service'
import { Client } from './../client.model'
import { Router } from '@angular/router'
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { FormLimpoComponent } from './../../components/form-limpo/form-limpo.component';
import {LoadingService} from './../../components/template/loading/loading.service'
import {LoadingComponent} from './../../components/template/loading/loading.component'

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.sass']
})
export class CadastrarComponent implements OnInit {

  client: Client = {
	  name: '',
	  age: null,
	  date: '',
	  sex: '',
	  pcd: false,
	  email: 'Sim'
  }
  
  constructor(private clientService: ClientService, private router: Router, public loadingService: LoadingService) { }
  
  limpou: boolean = null;
  confirmacao: string = '';

  ngOnInit(): void {
	  this.loadingService.carregarPg();
  }
  
  createClient(): void{
	  this.clientService.create(this.client).subscribe(() => {
		  
		  this.clientService.showMessage('Cliente cadastrado com sucesso.');
		  this.router.navigate(['/']);
	  })
  }
  
  limpar(){
	  this.client.name = '';
	  this.client.age = null;
	  this.client.date = '';
	  this.client.sex = '';
	  this.client.pcd = false;
	  this.client.email = 'Sim';
	  this.limpou = true
  }
  
  getMessage(msg: string){
	  this.confirmacao = msg;
  }
  
}
