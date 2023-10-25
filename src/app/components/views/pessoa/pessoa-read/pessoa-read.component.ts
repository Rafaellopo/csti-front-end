import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa.model';
import { PessoaServiceService } from '../pessoa-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-read',
  templateUrl: './pessoa-read.component.html',
  styleUrls: ['./pessoa-read.component.css']
})
export class PessoaReadComponent implements OnInit {

  displayedColumns: String[] = ["nome", "cargo", "equipe", "status", "acoes"]

  pessoa: Pessoa[] = [];

  title: string = "Colaboradores";

  btnCadastro: String = "Novo Colaborador";

  constructor(private pessoaService: PessoaServiceService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.pessoaService.findAll().subscribe((resposta) => {
      this.pessoa = resposta
    }, err => {
      this.pessoaService.mensagem('A busca não retornou resultado')
    })
  }

  delete(event){
    if(confirm("Deseja excluir?") ==  true){
      this.pessoaService.delete(event).subscribe((resposta)=>{
        window.location.reload();
      })
    }
  }

  create():void{
    this.router.navigate(["pessoa/create"]);
  }

}
