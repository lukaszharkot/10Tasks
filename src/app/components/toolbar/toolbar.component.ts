import { Component, inject, Input, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements AfterViewInit {
  @Input() theme: 'light' | 'dark' = 'light';
  @ViewChild('toolbarDiv') toolbar!: ElementRef;


  private renderer = inject(Renderer2); // zamiast constructor

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.toolbar.nativeElement, 'background-color', `var(--${this.theme})`);
  }

}
