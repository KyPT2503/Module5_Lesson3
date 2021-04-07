import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-for-pet-info',
  templateUrl: './for-pet-info.component.html',
  styleUrls: ['./for-pet-info.component.css']
})
export class ForPetInfoComponent implements OnInit {
  name = 'Thu';
  source = 'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-9/145896986_852015642037297_2166777198786430964_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=174925&_nc_ohc=9CR6khqOknYAX-Vz3xo&_nc_ht=scontent.fhan3-1.fna&oh=206a2c99e0075b70f388aa780aece72a&oe=60922123';

  constructor() {
  }

  ngOnInit(): void {
  }

  changeName(target: any): void {
    this.name = target.value;
  }

  changeSource(target: any): void {
    this.source = target.value;
  }
}
