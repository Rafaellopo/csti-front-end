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
  
  catalogo: Catalogo[] =[];

  title: String = "Catálogo"

  displayedColumns: String[] = ["id", "setor", "predio", "acoes" ]

  constructor(private service: CatalogoService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe((resposta) =>{
      this.catalogo = resposta
      console.log(resposta)
    })
  }


}
