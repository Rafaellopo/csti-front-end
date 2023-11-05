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
    cargo_id: "",
    status: "",
    status_id: '',
    equipe: '',
    equipe_id: "",
  }

  status: any[] = []

  cargo: any[] = []

  equipe: any[] = []


  constructor(private pessoaService: PessoaServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pessoa.id = this.route.snapshot.paramMap.get('id')
    this.findById()
    this.listStatus()
    this.listCargo()
    this.listEquipe()

  }

  findById(): void {
    this.pessoaService.findById(this.pessoa.id).subscribe((resp) => {
      this.pessoa.id = resp["id"]
      this.pessoa.nome = resp["nome"]
      this.pessoa.cargo = resp["cargo"]
      this.pessoa.cargo_id = resp["cargoId"]
      this.pessoa.equipe = resp["equipe"]
      this.pessoa.equipe_id = resp["equipeId"]
      this.pessoa.status = resp["status"]
      this.pessoa.status_id = resp["statusId"]
    })
  }

  update(): void {
    this.pessoaService.update(this.pessoa).subscribe((resp) => {
      this.router.navigate(['pessoa'])
      this.pessoaService.mensagem('Colaborador atualizado')
    })
  }

  listStatus(): void {
    this.pessoaService.listStatus().subscribe((resp) => {
      this.status = resp
    })
  }

  listCargo(): void {
    this.pessoaService.listCargo().subscribe((resp) => {
      this.cargo = resp
    })
  }

  listEquipe(): void {
    this.pessoaService.listEquipe().subscribe((resp) => {
      this.equipe = resp
    })
  }

  cancel(): void {
    this.router.navigate(['pessoa'])
  }

}
