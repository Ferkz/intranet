import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sistemas',
  templateUrl: './sistemas.component.html',
  styleUrls: ['./sistemas.component.scss']
})
export class SistemasComponent implements OnInit {
  @Input() systemName!: string;
  @Input() systemLink!: string;

  sistemas = [
    {nome: 'Imagens'},
  ]
  icons = [
    {icon: 'compare'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
