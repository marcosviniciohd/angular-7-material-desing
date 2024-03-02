import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding-review',
  templateUrl: './property-binding-review.component.html',
  styleUrls: ['./property-binding-review.component.css']
})
export class PropertyBindingReviewComponent implements OnInit {

  color: string = 'accent';
  btnDisabled: boolean = true;
  colors = ['primary', 'secondary', 'accent', 'warn', 'light'];
  idx = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.idx = (this.idx + 1) % this.colors.length;
    }, 1000);
  }

  ativarBotao(): void {
    if (this.btnDisabled) {
      this.btnDisabled = false;
    } else {
      this.btnDisabled = true;
    }
  }

}
