import { Component, OnInit } from '@angular/core';
import { Product } from './../product.model'
import { ProductService } from './../product.service'
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router'

@Component({
  selector: 'app-produto-read',
  templateUrl: './produto-read.component.html',
  styleUrls: ['./produto-read.component.sass']
})
export class ProdutoReadComponent implements OnInit {
  
  products: Product[]
  
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
	  this.productService.read().subscribe(products => {
		  this.products = products
	  })
  }
  
  addNewProd(){
	  this.router.navigate(['/produto/cadastrar']);
  }
  
}
