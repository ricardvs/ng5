import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // template: `
  //   This is ugly!
  // `
  styleUrls: ['./home.component.scss']
  // styles: [`
  // p { font-weight: bold;}
  // div {color: gry;`]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
