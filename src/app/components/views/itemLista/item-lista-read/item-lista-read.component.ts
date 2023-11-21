import { Component, OnInit } from '@angular/core';
import { ItemLista } from '../item-lista.model';
import { ItemListaService } from '../item-lista.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-lista-read',
  templateUrl: './item-lista-read.component.html',
  styleUrls: ['./item-lista-read.component.css']
})
export class ItemListaReadComponent implements OnInit {
  isChecked;

  displayedColumns: String[] = ["Atendimento", "Data", "Colaborador", "Local de atendimento"]

  itens: ItemLista[] = []

  itemLista: ItemLista = {
    id: '',
    atendimento: '',
    date: '',
    catalogo_id: '',
    catalogo: '',
    lista_id: '',
    lista: '',
    pessoa_id: '',
    pessoa: '',
    }

  title: string = "Lista";

  constructor(private service: ItemListaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.itemLista.lista_id = this.route.snapshot.paramMap.get('id')
    this.findAllByLista()
  }

  findAllByLista(){
    this.service.listAllByLista(this.itemLista.lista_id).subscribe((resp) =>{
      this.itens = resp
      console.log(resp)
    })
  }

  validIsChecked(){
    alert(this.isChecked)
  }

}
