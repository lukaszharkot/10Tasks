import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-task7',
  templateUrl: './task7.component.html',
  styleUrls: ['./task7.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms', style({ opacity: 1 }))
      ]),
    ]),
  ]
})
export class Task7Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
