import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../product.model';
import { FormsModule, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {LoadingService} from './../../components/template/loading/loading.service'
import {LoadingComponent} from './../../components/template/loading/loading.component'

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.sass']
})
export class ProdutoDeleteComponent implements OnInit {
  
  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    quant: new FormControl(null, [Validators.required, Validators.min(1)]),
  });
  
  product: Product = {
	name: '',
	quant: null
  }
  
  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService, public loadingService: LoadingService) { }

  ngOnInit(): void {
	  const id = this.route.snapshot.paramMap.get('id')
	  this.productService.getById(id).subscribe(product => {
		  this.product = product;
		  this.productForm.setValue({
		    name: product.name,
		    quant: product.quant
		  });
		  this.productForm.controls['name'].disable();
		  this.productForm.controls['quant'].disable();
	  })
	  
	  this.loadingService.carregarPg();
  }
  
  deleteProd(): void{
	  this.productService.delete(this.product.id).subscribe(() => {
		  this.productService.showMessage('Produto deletado com sucesso.', 3000);
		  this.router.navigate(['/produto']);
	  })
  }
  
  goToProd(){
	  this.router.navigate(['/produto']);
	  this.productService.showMessage('Operação cancelada.', 3000);
  }

}
