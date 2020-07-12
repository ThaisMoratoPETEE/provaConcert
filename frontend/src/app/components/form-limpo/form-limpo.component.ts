import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-form-limpo',
  templateUrl: './form-limpo.component.html',
  styleUrls: ['./form-limpo.component.sass']
})
export class FormLimpoComponent implements OnInit {
  
  @Input() limpouFormulario: boolean;
  @Output() informar = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }
  
  sendMessage(msg: string){
	  this.informar.emit(msg);
  }
  
}
