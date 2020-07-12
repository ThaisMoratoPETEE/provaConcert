import { Component, OnInit } from '@angular/core';
import { Client } from './../client.model'
import { ClientService } from './../client.service'
import {MatCardModule} from '@angular/material/card';
import {LoadingService} from './../../components/template/loading/loading.service'
import {LoadingComponent} from './../../components/template/loading/loading.component'

@Component({
  selector: 'app-client-read',
  templateUrl: './client-read.component.html',
  styleUrls: ['./client-read.component.sass']
})
export class ClientReadComponent implements OnInit {

  clients: Client[]
  
  constructor(private clientService: ClientService, public loadingService: LoadingService) { }

  ngOnInit(): void {
	  this.clientService.read().subscribe(clients => {
		  this.clients = clients
	  })
	  
	  this.loadingService.carregarPg();
  }

}
