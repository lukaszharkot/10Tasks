import { Component, Input, OnInit, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.css']
})
export class TaskComponentComponent implements OnInit {
  @Input() taskId?: number;
  taskContent: string | undefined;

  taskService = inject(TaskService);

  ngOnInit(): void {
    if (this.taskId !== undefined) {
      const task = this.taskService.getTaskById(this.taskId);
      this.taskContent = task ? task.content : undefined; 
    }
  }
}