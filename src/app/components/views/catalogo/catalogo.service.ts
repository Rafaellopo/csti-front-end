
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Catalogo } from './catalogo.model';
import { environment } from 'src/environments/environment';


import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  baseUrl: String = environment.baseUrl
  

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
1

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findById(id: String): Observable<Catalogo>{
    const url = `${this.baseUrl}/catalogo/${id}`
    return this.http.get<Catalogo>(url)
  }

  findAll(): Observable<Catalogo[]> {
    const url = `${this.baseUrl}/catalogo`;
    return this.http.get<Catalogo[]>(url)
  }

  findAllSetor(setor: String): Observable<Catalogo[]> {
    const url = `${this.baseUrl}/catalogo/setor/${setor}`
    return this.http.get<Catalogo[]>(url)
  }

  create(catalogo: Catalogo): Observable<Catalogo> {
    const url = `${this.baseUrl}/catalogo`
    return this.http.post<Catalogo>(url, catalogo)
  }

  update(catalogo: Catalogo): Observable<void>{
    const url = `${this.baseUrl}/catalogo/${catalogo.id}`
    return this.http.put<void>(url, catalogo)
  }

  delete(id: String): Observable<void>{
    const url = `${this.baseUrl}/catalogo/${id}`
    return this.http.delete<void>(url)
  }
  
  mensagem(str: String): void{
    this._snack.open(`${str}`, "OK", {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }


}
