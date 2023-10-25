import { Component, OnInit } from '@angular/core';
import { PessoaServiceService } from '../pessoa-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from '../pessoa.model';

@Component({
  selector: 'app-pessoa-update',
  templateUrl: './pessoa-update.component.html',
  styleUrls: ['./pessoa-update.component.css']
})
export class PessoaUpdateComponent implements OnInit {

  title: String = "Alterar dados do colaborador"

  pessoa: Pessoa = {
    id: '',
    nome: '',
    cargo: '',
    status: '',
    equipe: '',
  }


  constructor(private pessoaService: PessoaServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pessoa.id = this.route.snapshot.paramMap.get('id')
    this.findById()

  }

  findById(): void {
    this.pessoaService.findById(this.pessoa.id).subscribe((resp) => {
      this.pessoa = resp
    })
  }

  update(): void {
    this.pessoaService.update(this.pessoa).subscribe((resp) => {
      this.router.navigate(['pessoa'])
      this.pessoaService.mensagem('Colaborador atualizado')
    })
  }

  cancel(): void {
    this.router.navigate(['pessoa'])
  }

}
