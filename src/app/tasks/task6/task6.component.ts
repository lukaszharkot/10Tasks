import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-task6',
  templateUrl: './task6.component.html',
  styleUrls: ['./task6.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms', style({ opacity: 1 }))
      ]),
    ]),
  ]
})
export class Task6Component implements OnInit {
  dishes = ['Spaghetti Bolognese','Tacos','Chicken Curry','Caesar Salad','Grilled Salmon','Vegetable Stir Fry','Beef Stroganoff','Margherita Pizza','Pad Thai','Eggplant Parmesan'];
  direction?: 'asc' | 'desc';

  constructor() { }

  ngOnInit(): void {
  }

}
