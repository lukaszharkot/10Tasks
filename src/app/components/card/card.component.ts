import { Component, QueryList, AfterViewInit, Input, ElementRef, ChangeDetectorRef, ViewChildren, inject } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements AfterViewInit {
  like = false;
  starsVisible: boolean = false;

  @Input() style: 'normal' | 'wide'  = 'normal';
  @ViewChildren('starsContainer') starsContainer!: QueryList<ElementRef>; // Reference to stars content
  //constructor() { }

  private cdr: ChangeDetectorRef = inject(ChangeDetectorRef);

  toggleLike(): void {
    this.like = !this.like; 
  }

  ngAfterViewInit(): void {
    const starContainersArray = this.starsContainer.toArray();

    this.starsVisible = starContainersArray.length > 0;
    this.starsVisible = this.starsVisible && starContainersArray.some(container => container.nativeElement.children.length > 0);

    this.cdr.detectChanges();
  }
}