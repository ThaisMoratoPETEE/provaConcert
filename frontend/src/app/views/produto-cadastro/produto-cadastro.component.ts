import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service'
import { Product } from './../product.model'
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { FormLimpoComponent } from './../../components/form-limpo/form-limpo.component';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.sass']
})
export class ProdutoCadastroComponent implements OnInit {
  
  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    quant: new FormControl(null, [Validators.required, Validators.min(1)]),
  });
  
  product: Product = {
	  name: '',
	  quant: null
  }
  
  constructor(private router: Router, private productService: ProductService) { }
  
  limpou: boolean = null;
  confirmacao: string = '';
  
  ngOnInit(): void {
	  
  }
  
  cadastrarProduto(){
	  if(this.productForm.status === 'VALID'){
		  
		  this.product.name = this.productForm.get('name').value;
		  this.product.quant = this.productForm.get('quant').value;
		  
		  this.productService.create(this.product).subscribe(() => {
		  
			this.productService.showMessage('Produto cadastrado com sucesso.', 3000);
			this.router.navigate(['/produto']);
		  })  
	  } else {
		  this.productService.showMessage('ERRO: Campos inválidos. O produto não foi cadastrado. Por favor preencha o formulário corretamente.', null);
	  }
  }
  
  limpar(){
	  this.product.name = '';
	  this.product.quant = null;
	  this.productForm.setValue({
		  name: '',
		  quant: null
	  });
	  this.limpou = true
  }
  
  goToProd(){
	  this.router.navigate(['/produto']);
	  this.productService.showMessage('Operação cancelada.', 3000);
  }
  
  getMessage(msg: string){
	  this.confirmacao = msg;
  }
  
}
