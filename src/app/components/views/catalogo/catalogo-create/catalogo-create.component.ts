import { Component, OnInit } from '@angular/core';
import { Catalogo } from '../catalogo.model';
import { CatalogoService } from '../catalogo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo-create',
  templateUrl: './catalogo-create.component.html',
  styleUrls: ['./catalogo-create.component.css']
})
export class CatalogoCreateComponent implements OnInit {

  title: String = "Crie um novo Endereço"

  catalogo: Catalogo = {
    setor: '',
    predio: '',
    andar: '',
    sala: '',
  }

  constructor(private service: CatalogoService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.catalogo).subscribe((resposta) => {
      this.router.navigate(['catalogo'])
    }, err => {
      console.log(err);
    })
  }

  cancel(): void{
    this.router.navigate(['catalogo'])
  }

}
