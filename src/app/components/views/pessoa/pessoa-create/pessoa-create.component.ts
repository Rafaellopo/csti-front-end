import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa.model';
import { PessoaServiceService } from '../pessoa-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-create',
  templateUrl: './pessoa-create.component.html',
  styleUrls: ['./pessoa-create.component.css'],
})
export class PessoaCreateComponent implements OnInit {

  title: String = "Cadastre um novo colaborador"

  pessoa: Pessoa = {
    cargo: '',
    nome: '',
    status_id: '',
    equipe: '',
  }

  status: any[] = []

  cargo: any[] = []

  equipe: any[] = []


  constructor(private pessoaService: PessoaServiceService, private router: Router) { }

  ngOnInit(): void {
    this.listStatus()
    this.listCargo()
    this.listEquipe()
  }

  create(): void {
    this.pessoaService.create(this.pessoa).subscribe((resposta) => {
      this.router.navigate(["pessoa"])
      this.pessoaService.mensagem(`Colaborador, ${resposta.nome}, cadastrado com sucesso`)
    }, err => {
      this.pessoaService.mensagem('Não foi possível cadastrar o colaborador')
    })
  }


  listStatus(): void {
    this.pessoaService.listStatus().subscribe((resp) => {
      this.status = resp
    })
  }

  listCargo():  void{
    this.pessoaService.listCargo().subscribe((resp) =>{
      this.cargo = resp
    })
  }

  listEquipe(): void{
    this.pessoaService.listEquipe().subscribe((resp) => {
      this.equipe = resp
      console.log(this.equipe)
    })
  }

  cancel(): void {
    this.router.navigate(["pessoa"])
  }



}
