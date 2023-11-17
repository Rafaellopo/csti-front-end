import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { CatalogoReadComponent } from './components/views/catalogo/catalogo-read/catalogo-read.component';
import { CatalogoCreateComponent } from './components/views/catalogo/catalogo-create/catalogo-create.component';
import { CatalogoUpdateComponent } from './components/views/catalogo/catalogo-update/catalogo-update.component';
import { PessoaReadComponent } from './components/views/pessoa/pessoa-read/pessoa-read.component';
import { PessoaCreateComponent } from './components/views/pessoa/pessoa-create/pessoa-create.component';
import { PessoaUpdateComponent } from './components/views/pessoa/pessoa-update/pessoa-update.component';
import { ListaReadComponent } from './components/views/lista/lista-read/lista-read.component';
import { ListaCreateComponent } from './components/views/lista/lista-create/lista-create.component';
import { ListaUpdateComponent } from './components/views/lista/lista-update/lista-update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'catalogo',
    component: CatalogoReadComponent
  },
  {
    path: 'catalogo/create',
    component: CatalogoCreateComponent
  },
  {
    path: 'catalogo/update/:id',
    component: CatalogoUpdateComponent
  },
  {
    path: 'pessoa',
    component: PessoaReadComponent
  },
  {
    path: 'pessoa/create',
    component: PessoaCreateComponent
  },
  {
    path: 'pessoa/update/:id',
    component: PessoaUpdateComponent
  },
  {
    path: 'lista',
    component: ListaReadComponent
  },
  {
    path: 'lista/create',
    component: ListaCreateComponent
  },
  {
    path: 'lista/update/:id',
    component: ListaUpdateComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
