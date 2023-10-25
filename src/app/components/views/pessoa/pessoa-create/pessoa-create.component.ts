import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa.model';
import { PessoaServiceService } from '../pessoa-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-create',
  templateUrl: './pessoa-create.component.html',
  styleUrls: ['./pessoa-create.component.css']
})
export class PessoaCreateComponent implements OnInit {

  title: String = "Cadastre um novo colaborador"

  pessoa: Pessoa = {
    cargo: '',
    nome: '',
    status: '',
    equipe: '',
  }



  constructor(private pessoaService: PessoaServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.pessoaService.create(this.pessoa).subscribe((resposta) => {
      this.pessoaService.mensagem(`Colaborador, ${resposta.nome}, cadastrado com sucesso`)
      this.router.navigate(["pessoa"])
    }, err => {
      this.pessoaService.mensagem('Não foi possível cadastrar o colaborador')
    })
  }

  cancel(): void{
    this.router.navigate(["pessoa"])
  }



}
