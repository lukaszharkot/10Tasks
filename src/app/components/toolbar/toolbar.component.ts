import { Component, inject, Input, ViewChild, ElementRef, Renderer2, AfterViewInit, OnInit} from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements AfterViewInit, OnInit {
  @Input() theme: 'light' | 'dark' = 'light';
  @ViewChild('toolbarDiv') toolbar!: ElementRef;

  private renderer = inject(Renderer2); // zamiast constructor

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.toolbar.nativeElement, 'background-color', `var(--${this.theme})`);
  }

}

//zrobic toolbar zeby sie powiekszal i "wsiakal" 