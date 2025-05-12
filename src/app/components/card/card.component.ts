import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  sistemas = [
    {nome: 'Enfermagem', link:'http://10.0.0.65:8080/servo/logon.jsp?sys=ENF&msgKey='},
    {nome:'Médico',link:'http://10.0.0.65:8080/servo/logon.jsp?sys=ATE&msgKey='},
    {nome:'Triagem', link:'http://10.0.0.65:8080/servo/logon.jsp?sys=TRI&msgKey='},
    {nome: 'Radiologia', link:'http://laudo.hospitalsamar.com.br/'},
    {nome: 'Google Chat', link:'https://mail.google.com/chat/u/0/#chat/home'},
    {nome: 'Gmail', link:'https://mail.google.com'},
    {nome: 'Suporte TI', link:'https://suporte.redesamar.com.br/'},
    {nome: 'Manutenção', link:'https://manutencao.redesamar.com.br/'},
    {nome:'Evento adverso',link: 'https://docs.google.com/forms/d/e/1FAIpQLScP_geTiJmS-wDFgpBD613hgVw0NKN_wT_WU1bx6oSYqyCJ1A/viewform'}
  ]
  icons = [
    {icon:'local_hospital'},
    {icon: 'local_hospital'},
    {icon: 'local_hospital'},
    {icon: 'compare'},
    {icon:'chat'},
    {icon:'mail'},
    {icon:'computer'},
    {icon:'engineering'},
    {icon:'edit_calendar'}
  ]
   constructor() { }

  ngOnInit() {
  }

}
