import { Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})

export class AccordionComponent implements OnChanges {

  @Input() items: { title: string, body: string, icon: string }[] = [];

  isOpen: number | null = null;

  ngOnChanges() {
    this.isOpen = null;
  }

  toggleAccordion(index: number) {
    if (this.isOpen === index) {
      this.isOpen = null;
    } else {
      this.isOpen = index;
    }
  }
}

