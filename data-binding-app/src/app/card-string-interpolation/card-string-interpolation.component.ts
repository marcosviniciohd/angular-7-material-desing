import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-string-interpolation',
  templateUrl: './card-string-interpolation.component.html',
  styleUrls: ['./card-string-interpolation.component.css']
})
export class CardStringInterpolationComponent implements OnInit {

  produto = {
    nome: 'Smart TV',
    preco: 3000.00,
    marca: 'Samsung'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
