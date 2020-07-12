import { Component, OnInit } from '@angular/core';
import { ClientService } from './../client.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from './../client.model';
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

@Component({
  selector: 'app-client-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.sass']
})
export class ClientDeleteComponent implements OnInit {
  
  client: Client = {
	name: '',
	age: null,
	date: '',
	sex: '',
	pcd: null,
	email: ''
  }
  
  constructor(private clientService: ClientService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
	  const id = this.route.snapshot.paramMap.get('id')
	  this.clientService.getById(id).subscribe(client => {
		  this.client = client;
	  })
  }

  
  deleteClient(): void{
	  this.clientService.delete(this.client.id).subscribe(() => {
		  this.clientService.showMessage('Cadastro deletado com sucesso.');
		  this.router.navigate(['/']);
	  })
  }
  
  cancel(): void{
	  this.router.navigate(['/']);
  }
  
}
