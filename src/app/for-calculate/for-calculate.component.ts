import {Component, OnInit} from '@angular/core';
import {element} from 'protractor';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-for-calculate',
  templateUrl: './for-calculate.component.html',
  styleUrls: ['./for-calculate.component.css']
})
export class ForCalculateComponent implements OnInit {
  first = 1;
  second = 1;
  res = 2;
  operator = '+';

  constructor() {
  }

  ngOnInit(): void {
  }

  count(): void {
    const n1: number = this.first;
    const n2: number = this.second;
    if (this.operator === '+') {
      this.res = n1 - -n2;
    } else if (this.operator === '-') {
      this.res = n1 - n2;
    } else if (this.operator === '*') {
      this.res = n1 * n2;
    } else {
      this.res = n1 / n2;
    }
  }
}
