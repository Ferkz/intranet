import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  sistemas = [
    {nome: 'Sistema Enfermagem'},
    {nome:'Sistema Médico'},
    {nome: 'Sistema Radiologia'},
    {nome: 'Google Chat'},
    {nome: 'Gmail'},
    {nome: 'Suporte TI'}
  ]
   constructor() { }

  ngOnInit() {
  }

}
