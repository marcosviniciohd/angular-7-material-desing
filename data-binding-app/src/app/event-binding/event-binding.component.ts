import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonName: string = "My button";
  i: number = 0;
  spinnerMode = "determinate";
  btnEnable = true;

  constructor() { }

  ngOnInit(): void {
  }

  save(){
    console.log("Botão clicado!");
  }

  myButton(){
    console.log("My button clicado!");
    console.log(this.i++);
    this.buttonName = "It was clicked " + this.i + " times";
  }

  disable(){
    this.btnEnable = false;
    this.spinnerMode = "indeterminate";
    setTimeout(() => {
      this.btnEnable = true;
    })
  }

}
