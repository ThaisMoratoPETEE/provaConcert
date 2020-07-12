import { Component, OnInit } from '@angular/core';
import { Product } from './../product.model'
import { ProductService } from './../product.service'
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router'
import {LoadingService} from './../../components/template/loading/loading.service'
import {LoadingComponent} from './../../components/template/loading/loading.component'

@Component({
  selector: 'app-produto-read',
  templateUrl: './produto-read.component.html',
  styleUrls: ['./produto-read.component.sass']
})
export class ProdutoReadComponent implements OnInit {
  
  products: Product[]
  
  constructor(private productService: ProductService, private router: Router, public loadingService: LoadingService) { }

  ngOnInit(): void {
	  this.productService.read().subscribe(products => {
		  this.products = products
	  })
	  
	  this.loadingService.carregarPg();
  }
  
  addNewProd(){
	  this.router.navigate(['/produto/cadastrar']);
  }
  
}
