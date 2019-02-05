import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eit-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {
  usuario = 'hassel yomeri curiel jimemenz';

  constructor() { }

  ngOnInit() {
  }

}
