import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-task8',
  templateUrl: './task8.component.html',
  styleUrls: ['./task8.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms', style({ opacity: 1 }))
      ]),
    ]),
  ]
})
export class Task8Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
