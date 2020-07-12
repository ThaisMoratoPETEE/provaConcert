import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {AuthService} from './auth.service'
import {Usuario} from './user.model'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit {
  
  user: Usuario = {
	  name: '',
	  pw: ''
  }
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  
  fazerLogin(){
	  this.authService.autenticar(this.user);
  }
  
}
