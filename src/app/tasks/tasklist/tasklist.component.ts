import { Component, OnInit, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  tasks: any[] = [];

  taskService = inject(TaskService);

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }
}
