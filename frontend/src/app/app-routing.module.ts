import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CadastrarComponent} from './views/cadastrar/cadastrar.component';
import {MapaComponent} from './views/mapa/mapa.component';
import {ClientReadComponent} from './views/client-read/client-read.component';
import {ClientUpdateComponent} from './views/client-update/client-update.component';
import {ClientDeleteComponent} from './views/client-delete/client-delete.component';
import {LoginComponent} from './views/login/login.component';
import {ProdutoCadastroComponent} from './views/produto-cadastro/produto-cadastro.component';
import {ProdutoReadComponent} from './views/produto-read/produto-read.component';
import {ProdutoDeleteComponent} from './views/produto-delete/produto-delete.component';
import {ProdutoUpdateComponent} from './views/produto-update/produto-update.component';

const routes: Routes = [{
	path: "",
	component: ClientReadComponent
	},
	{
	path: "cadastrar",
	component: CadastrarComponent
	},
	{
	path: "mapa",
	component: MapaComponent
	},
	{
	path: "cadastrar/editar/:id",
	component: ClientUpdateComponent
	},
	{
	path: "cadastrar/deletar/:id",
	component: ClientDeleteComponent
	},
	{
	path: "login",
	component: LoginComponent
	},
	{
	path: "produto/cadastrar",
	component: ProdutoCadastroComponent
	},
	{
	path: "produto",
	component: ProdutoReadComponent
	},
	{
	path: "produto/deletar/:id",
	component: ProdutoDeleteComponent
	},
	{
	path: "produto/editar/:id",
	component: ProdutoUpdateComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
