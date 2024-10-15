import { Component, OnInit, inject, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements AfterViewInit {
  like = false;

  message = 'Add to cart';
  @Input() style: 'normal' | 'wide'  = 'normal';
  //constructor() { }
  //inject

  toggleLike(): void {
    this.like = !this.like; 
  }

  ngAfterViewInit(): void {
  }

}