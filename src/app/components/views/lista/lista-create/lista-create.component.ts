import { Component, OnInit } from '@angular/core';
import { ListaService } from '../lista.service';
import { Router } from '@angular/router';
import { Lista } from '../lista.model';

@Component({
  selector: 'app-lista-create',
  templateUrl: './lista-create.component.html',
  styleUrls: ['./lista-create.component.css']
})
export class ListaCreateComponent implements OnInit {

  title: String = "Criar nova lista"

  lista: Lista ={
    id: '',
    date: '',
    descricao: '',
    equipe_id: '',
    equipe: '',

  }

  equipe: any[] = []


  constructor(private service: ListaService, private router: Router) { }

  ngOnInit(): void {
    this.listarEquipe()
  }

  create(): void{
    this.service.create(this.lista).subscribe((resp)=>{
      this.router.navigate(["lista"])
      this.service.mensagem(`A Lista: ${resp.descricao}, foi criada!`)
    })
  }


  listarEquipe(): void{
    this.service.listarEquipe().subscribe((resp)=>{
      this.equipe = resp
    })
  }

  cancel(): void{
    this.router.navigate(["lista"])
  }


}
