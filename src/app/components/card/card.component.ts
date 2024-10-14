import { Component, OnInit, inject, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements AfterViewInit {
  isActive = false;
  message = 'Add to cart';
  //constructor() { }
  //inject

  setActivetTrue () {
    this.isActive = true
  }
  setActiveFalse() {
    this.isActive = false
  }

  ngAfterViewInit(): void {
  }

}

//NgIf do uzycia razem z inputem, zrobie wersje wide i small - dwa kafelki jak na olx w liscie albo w kafelku. 
//isActive do przycisku jak sie kliknie to pisze Added to cart jak sie najedzie na hover to sie pojawia remove from cart ? opacity i visibility wtedy css