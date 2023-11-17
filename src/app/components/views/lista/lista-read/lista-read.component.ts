import { Component, OnInit } from '@angular/core';
import { Lista } from '../lista.model';
import { ListaService } from '../lista.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-read',
  templateUrl: './lista-read.component.html',
  styleUrls: ['./lista-read.component.css']
})
export class ListaReadComponent implements OnInit {

  listas: Lista[] = []

  displayedColumns: string[] = ['id', 'date', 'descricao', 'equipe', 'acoes']

  constructor(private service: ListaService, private router: Router) { }

  ngOnInit(): void {
    this.findAll()
  }

  findAll(){
    this.service.findAll().subscribe((resp)=>{
      this.listas = resp
    })
  }

  goCreateNewLista(){
    this.router.navigate(["lista/create"])
  }
}
