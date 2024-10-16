import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-task9',
  templateUrl: './task9.component.html',
  styleUrls: ['./task9.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms', style({ opacity: 1 }))
      ]),
    ]),
  ]
})
export class Task9Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
