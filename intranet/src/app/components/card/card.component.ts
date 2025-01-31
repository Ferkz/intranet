import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  sistemas = [
    {nome: 'Enfermagem'},
    {nome:'Médico'},
    {nome:'Triagem'},
    {nome: 'Radiologia'},
    {nome: 'Google Chat'},
    {nome: 'Gmail'},
    {nome: 'Suporte TI'},
  ]
  icons = [
    {icon:'local_hospital'},
    {icon: 'local_hospital'},
    {icon: 'local_hospital'},
    {icon: 'compare'},
    {icon:'chat'},
    {icon:'mail'},
    {icon:'computer'}
  ]
   constructor() { }

  ngOnInit() {
  }

}
