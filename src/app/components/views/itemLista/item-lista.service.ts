import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ItemLista } from './item-lista.model';

@Injectable({
  providedIn: 'root'
})
export class ItemListaService {

  baseUrl: String = environment.baseUrl

  horizontalPosition: MatSnackBarHorizontalPosition = 'end'
  verticalPosition: MatSnackBarVerticalPosition = 'top'

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  public listAllByLista(id: String): Observable<ItemLista[]> {
    const url = `${this.baseUrl}/itensLista?identity=${id}`
    return this.http.get<ItemLista[]>(url)
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, "OK", {
      duration: 6000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    })
  }
}
