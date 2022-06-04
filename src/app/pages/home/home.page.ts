import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  data = new Date();
  currentHuer = String(this.data. getDate()).padStart(2,'0');

  constructor() {}

}
