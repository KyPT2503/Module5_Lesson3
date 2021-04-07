import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-for-font-size',
  templateUrl: './for-font-size.component.html',
  styleUrls: ['./for-font-size.component.css']
})
export class ForFontSizeComponent implements OnInit {
  size = 100;
  fontSize = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeSize(value: any): void {
    console.log(value.value);
    this.fontSize = value.value;
  }
}
