import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { CatalogoReadComponent } from './components/views/catalogo/catalogo-read/catalogo-read.component';
import { CatalogoCreateComponent } from './components/views/catalogo/catalogo-create/catalogo-create.component';
import { CatalogoUpdateComponent } from './components/views/catalogo/catalogo-update/catalogo-update.component';

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
