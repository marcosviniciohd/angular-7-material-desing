import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  firstName: string = 'Marcos Vinício';

  person = {
    firstname: "Marcos",
    lastname: "Vinício"
   }


  produto = {
    nome: "Notebook",
    marca: "Sony Vaio",
    preco: 1499.00
  }

  constructor() { }

  ngOnInit(): void {
  }

}
