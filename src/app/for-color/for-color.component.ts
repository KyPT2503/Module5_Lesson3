import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-for-color',
  templateUrl: './for-color.component.html',
  styleUrls: ['./for-color.component.css']
})
export class ForColorComponent implements OnInit {
  colorCode: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  getColor(): void {
    console.log(this.colorCode);
  }
}
