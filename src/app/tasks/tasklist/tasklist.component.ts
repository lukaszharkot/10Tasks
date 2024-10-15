import { Component, OnInit, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations'; 

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('200ms', [
          animate('300ms ease-out', style({ opacity: 1 }))
        ]), { optional: true })
      ])
    ])
  ]
})
export class TasklistComponent implements OnInit {
  tasks: any[] = [];
  taskMessage = 'View task >'

  taskService = inject(TaskService);

  showMessage() {
    this.taskMessage = "It's above you!";
  }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }
}
