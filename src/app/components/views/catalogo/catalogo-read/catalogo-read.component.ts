import { Component, OnInit } from '@angular/core';
import { Catalogo } from '../catalogo.model';
import { CatalogoService } from '../catalogo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo-read',
  templateUrl: './catalogo-read.component.html',
  styleUrls: ['./catalogo-read.component.css']
})
export class CatalogoReadComponent implements OnInit {

  catalogo: Catalogo[] = [];

  catalogoPesquisa: Catalogo = {
    setor: '',
    predio: '',
    sala: '',
    andar: '',
  }

  title: String = "Catálogo"

  displayedColumns: String[] = ["setor", "predio", "andar", "sala", "acoes"]

  constructor(private service: CatalogoService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    if (this.catalogoPesquisa.setor == '') {
      this.service.findAll().subscribe((resposta) => {
        this.catalogo = resposta
        console.log(resposta)
      })
    } else {
      this.service.findAllSetor(this.catalogoPesquisa.setor).subscribe((resposta) => {
        this.catalogo = resposta
      })
    }
  }

  create(): void {
    this.router.navigate(["catalogo/create"])
  }


}
