import { Component, OnInit } from '@angular/core';
import { Lista } from '../lista.model';
import { ListaService } from '../lista.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-update',
  templateUrl: './lista-update.component.html',
  styleUrls: ['./lista-update.component.css']
})
export class ListaUpdateComponent implements OnInit {

  title: String = "Atualizar lista"

  lista: Lista ={
    id: '',
    date: '',
    descricao: '',
    equipe_id: '',
    equipe: '',

  }

  equipe: any[] = []

  constructor(private service: ListaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.lista.id = this.route.snapshot.paramMap.get('id')
    this.findById()
    this.listarEquipe()
  }

  update(): void{
    this.service.update(this.lista).subscribe((resp)=>{
      this.router.navigate(["lista"])
      this.service.mensagem(`A Lista foi atualizada!`)
    })
  }

  findById(): void{
    this.service.findById(this.lista.id).subscribe((resp)=>{
      this.lista = resp
      this.lista.id = resp["id"]
      this.lista.date = resp["date"]
      this.lista.descricao = resp["descricao"]
      this.lista.equipe_id = resp["equipeId"]
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
