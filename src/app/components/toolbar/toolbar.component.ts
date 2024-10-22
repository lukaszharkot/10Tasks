import { Component, inject, Input, ViewChild, ElementRef, Renderer2, AfterViewInit, OnInit, OnDestroy} from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { TaskService } from '../../services/task.service';
import { fromEvent, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


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

export class ToolbarComponent implements AfterViewInit, OnInit, OnDestroy {
  showTasks: boolean = false;
  scrolled: boolean = false;
  tasks: any[] = [];
  taskMessage = 'Task 1 >'

  @Input() theme: 'light' | 'dark' = 'light';
  @ViewChild('toolbarDiv') toolbar!: ElementRef;

  private renderer = inject(Renderer2); // zamiast constructor
  taskService = inject(TaskService);
  private scrollSubscription!: Subscription;

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  ngAfterViewInit(): void {
      if (this.theme === 'light') {
    this.renderer.setStyle(this.toolbar.nativeElement, 'background-color', `var(--light)`);
    this.renderer.setStyle(this.toolbar.nativeElement, 'color', `black`);
  } else if (this.theme === 'dark') {
    this.renderer.setStyle(this.toolbar.nativeElement, 'background-color', `var(--dark)`);
    this.renderer.setStyle(this.toolbar.nativeElement, 'color', `white`);
  }

    // Rxjs tworzymy obserwowaną fukcje pipe
    const scroll$ = fromEvent(window, 'scroll').pipe(
      map(() => window.scrollY > 0)
    );

    // Subskrybujemy do "wyniku"
    this.scrollSubscription = scroll$.subscribe((isScrolled: boolean) => {
      this.scrolled = isScrolled;
      console.log(isScrolled)
    });
  }

  //robimy to żeby uniknąć problemów jeżeli komponent został zniszczony
  ngOnDestroy(): void {
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
  }

  showMessage() {
    this.taskMessage = "Above U!";
  }
  toggleTasks(): void {
    this.showTasks = !this.showTasks;
  }
  closeDropdown(): void {
    this.showTasks = false;
    this.taskMessage = 'Task 1 >'
  }
}

//zrobic toolbar zeby sie powiekszal i "wsiakal" 