import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: String = "Bem vindo"
  subtitle: String= "Sistema de gerenciamento de endereços do TRF1, para atendimento das equipes de suporte"

  constructor() { }

  ngOnInit(): void {
  }

}
