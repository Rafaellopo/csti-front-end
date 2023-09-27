import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Catalogo } from './catalogo.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  baseUrl: String = environment.baseUrl

  constructor(private http: HttpClient) { }

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


}
