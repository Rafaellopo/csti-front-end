import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Lista } from './lista.model';


@Injectable({
  providedIn: 'root'
})
export class ListaService {

  baseUrl: String = environment.baseUrl;

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Lista[]>{
    const url = `${this.baseUrl}/listas`;
    return this.http.get<Lista[]>(url);
  }

  findById(id: String): Observable<Lista>{
    const url = `${this.baseUrl}/listas/${id}`
    return this.http.get<Lista>(url)
  }

  create(lista: Lista): Observable<Lista>{
    const url = `${this.baseUrl}/listas/${lista.equipe_id}`
    return this.http.post<Lista>(url, lista)
  }

  update(lista: Lista): Observable<Lista>{
    const url = `${this.baseUrl}/listas/${lista.id}?equipe=${lista.equipe_id}`
    return this.http.put<Lista>(url, lista)
  }

  listarEquipe(): Observable<any[]>{
    const url = `${this.baseUrl}/equipe`
    return this.http.get<any[]>(url)
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, "OK", {
      duration: 6000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
