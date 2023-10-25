import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from './pessoa.model';
import { environment } from 'src/environments/environment';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class PessoaServiceService {

  baseUrl: String = environment.baseUrl

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findById(id: String): Observable<Pessoa> {
    const url = `${this.baseUrl}/pessoa/${id}`
    return this.http.get<Pessoa>(url)
  }

  findAll(): Observable<Pessoa[]> {
    const url = `${this.baseUrl}/pessoa`
    return this.http.get<Pessoa[]>(url);
  }

  create(pessoa: Pessoa): Observable<Pessoa> {
    const url = `${this.baseUrl}/pessoa`
    return this.http.post<Pessoa>(url, pessoa)
  }

  update(pessoa: Pessoa): Observable<void> {
    const url = `${this.baseUrl}/pessoa/${pessoa.id}`
    return this.http.put<void>(url, pessoa)
  }

  delete(id: String): Observable<void> {
    const url = `${this.baseUrl}/pessoa/${id}`
    return this.http.delete<void>(url)
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, "OK", {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}