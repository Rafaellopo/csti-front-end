import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


//Components 
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './components/views/home/home.component';
import { CatalogoReadComponent } from './components/views/catalogo/catalogo-read/catalogo-read.component';
import { CatalogoCreateComponent } from './components/views/catalogo/catalogo-create/catalogo-create.component';
import { CatalogoUpdateComponent } from './components/views/catalogo/catalogo-update/catalogo-update.component';
import { PessoaReadComponent } from './components/views/pessoa/pessoa-read/pessoa-read.component';
import { PessoaCreateComponent } from './components/views/pessoa/pessoa-create/pessoa-create.component';
import { PessoaUpdateComponent } from './components/views/pessoa/pessoa-update/pessoa-update.component';


//Imports Angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CatalogoReadComponent,
    CatalogoCreateComponent,
    CatalogoUpdateComponent,
    PessoaReadComponent,
    PessoaCreateComponent,
    PessoaUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatSelectModule,

  ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
