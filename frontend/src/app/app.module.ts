import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//meus arquivos
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavbarComponent } from './components/template/navbar/navbar.component';
import { CadastrarComponent } from './views/cadastrar/cadastrar.component';
import { MapaComponent } from './views/mapa/mapa.component';
import { ClientReadComponent } from './views/client-read/client-read.component';
import { ClientUpdateComponent } from './views/client-update/client-update.component';
import { ClientDeleteComponent } from './views/client-delete/client-delete.component';
import { LoginComponent } from './views/login/login.component';
import { AuthService } from './views/login/auth.service';
import { ProdutoCadastroComponent } from './views/produto-cadastro/produto-cadastro.component';
import { ProdutoReadComponent } from './views/produto-read/produto-read.component';
import { ProdutoUpdateComponent } from './views/produto-update/produto-update.component';
import { ProdutoDeleteComponent } from './views/produto-delete/produto-delete.component';
import { LoadingComponent } from './components/template/loading/loading.component';

//arquivos externos
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

//formulario
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatNativeDateModule} from '@angular/material/core'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { FormLimpoComponent } from './components/form-limpo/form-limpo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    CadastrarComponent,
    MapaComponent,
    ClientReadComponent,
    ClientUpdateComponent,
    ClientDeleteComponent,
    LoginComponent,
    FormLimpoComponent,
    ProdutoCadastroComponent,
    ProdutoReadComponent,
    ProdutoUpdateComponent,
    ProdutoDeleteComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	MatToolbarModule,
	MatSidenavModule,
	MatListModule,
	MatSnackBarModule,
	HttpClientModule,
	FormsModule,
	MatFormFieldModule,
	MatInputModule,
	MatCardModule,
	MatRadioModule,
	MatCheckboxModule,
	MatSelectModule,
	MatButtonModule,
	MatTableModule,
	MatNativeDateModule,
	MatDatepickerModule,
	ReactiveFormsModule,
	MatProgressSpinnerModule
  ],
  providers: [
  MatDatepickerModule,
  MatNativeDateModule,
  AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
