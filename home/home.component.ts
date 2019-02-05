import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eit-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  interpolacion = 'Interpolacion de String';
  url = 'https://www.youtube.com/watch?v=jtBhQJrX3sc';

  constructor() { }

  ngOnInit() {
  }

}
