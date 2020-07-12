import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../product.model';
import { FormsModule, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-produto-update',
  templateUrl: './produto-update.component.html',
  styleUrls: ['./produto-update.component.sass']
})
export class ProdutoUpdateComponent implements OnInit {
  
  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    quant: new FormControl(null, [Validators.required, Validators.min(1)]),
  });
  
  product: Product = {
	name: '',
	quant: null
  }
  
  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
	  const id = this.route.snapshot.paramMap.get('id')
	  this.productService.getById(id).subscribe(product => {
		  this.product = product;
		  this.productForm.setValue({
		    name: product.name,
		    quant: product.quant
		  });
	  })
  }
  
  editProd(): void{
	if(this.productForm.status === 'VALID'){
	  this.product.name = this.productForm.get('name').value;
	  this.product.quant = this.productForm.get('quant').value;
	  	  
	  this.productService.update(this.product).subscribe(() => {
		  this.productService.showMessage('Produto alterado com sucesso.', 3000);
		  this.router.navigate(['/produto']);
	  })
	} else {
		  this.productService.showMessage('ERRO: Campos inválidos. O produto não foi alterado. Por favor preencha o formulário corretamente.', null);
	  }
  }
  
  goToProd(){
	  this.router.navigate(['/produto']);
  }

}
