import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../catalogo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Catalogo } from '../catalogo.model';

@Component({
  selector: 'app-catalogo-update',
  templateUrl: './catalogo-update.component.html',
  styleUrls: ['./catalogo-update.component.css']
})
export class CatalogoUpdateComponent implements OnInit {

  title: String = "Atualize o Endereço"

  catalogo: Catalogo = {
    id: '',
    setor: '',
    predio: '',
    andar: '',
    sala: '',
  }

  constructor(private service: CatalogoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.catalogo.id = this.route.snapshot.paramMap.get('id')
    this.findById()
  }

  findById(): void{
    this.service.findById(this.catalogo.id).subscribe((resposta)=>{
      this.catalogo = resposta
    })
  }

  update(): void {
    this.service.update(this.catalogo).subscribe((resposta)=>{
      this.router.navigate(['catalogo'])
    })
  }

  cancel(): void {
    this.router.navigate(['catalogo'])
  }

}
