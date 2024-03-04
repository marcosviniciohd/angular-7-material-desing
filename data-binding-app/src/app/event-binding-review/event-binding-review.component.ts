import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding-review',
  templateUrl: './event-binding-review.component.html',
  styleUrls: ['./event-binding-review.component.css']
})
export class EventBindingReviewComponent implements OnInit {

  buttonName: string = 'Cancelar';
  i = 0;

  constructor() { }

  ngOnInit(): void {
  }

  save(): void {
    console.log('Saved');
  }

  increment(): void {
    this.i++;
    this.buttonName = 'Incrementar' + this.i;
    console.log(this.i);
  }

}
