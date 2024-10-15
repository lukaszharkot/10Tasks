import { Component, inject, Input, ViewChild, ElementRef, Renderer2, AfterViewInit, OnInit} from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-5px)' }),
        animate(200, style({ opacity: 1, transform: 'translateY(0)' })) 
      ]),
      transition(':leave', [
        animate(200, style({ opacity: 0, transform: 'translateY(-5px)' }))
      ])
    ])
  ]
})

export class ToolbarComponent implements AfterViewInit, OnInit {
  showTasks: boolean = false;
  taskMessage = 'View task >'
  tasks: any[] = [];
  @Input() theme: 'light' | 'dark' = 'light';
  @ViewChild('toolbarDiv') toolbar!: ElementRef;

  private renderer = inject(Renderer2); // zamiast constructor
  taskService = inject(TaskService);

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.toolbar.nativeElement, 'background-color', `var(--${this.theme})`);
  }

  showMessage() {
    this.taskMessage = "It's above you!";
  }
  toggleTasks(): void {
    this.showTasks = !this.showTasks;
  }
  closeDropdown(): void {
    this.showTasks = false;
  }
}

//zrobic toolbar zeby sie powiekszal i "wsiakal" 