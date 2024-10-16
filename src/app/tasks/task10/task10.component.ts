import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-task10',
  templateUrl: './task10.component.html',
  styleUrls: ['./task10.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms', style({ opacity: 1 }))
      ]),
    ]),
  ]
})
export class Task10Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
