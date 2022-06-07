import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  date = new Date();
  week = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sabado'];
  currentDay = String(this.date. getDate()).padStart(2,'0');
  dayOfWeek = this.week[this.date.getDay()];

  constructor() {}

}
