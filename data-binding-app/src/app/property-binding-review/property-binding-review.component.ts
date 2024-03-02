import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding-review',
  templateUrl: './property-binding-review.component.html',
  styleUrls: ['./property-binding-review.component.css']
})
export class PropertyBindingReviewComponent implements OnInit {

  color: string = 'accent';
  btnDisabled: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  ativarBotao(): void {
    if (this.btnDisabled) {
      this.btnDisabled = false;
    } else {
      this.btnDisabled = true;
    }
  }

}
