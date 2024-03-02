import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation-revision',
  templateUrl: './string-interpolation-revision.component.html',
  styleUrls: ['./string-interpolation-revision.component.css']
})
export class StringInterpolationRevisionComponent implements OnInit {

  nome: string = 'Marcos Vinício';

  pessoa = {
    nome: 'Marcos',
    sobreNome: 'Vinício',
    idade: 37,
    endereco: 'Rua 1, nº 1'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
