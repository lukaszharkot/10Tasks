import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Task2Component } from './tasks/task2/task2.component';
import { Task3Component } from './tasks/task3/task3.component';
import { Task4Component } from './tasks/task4/task4.component';
import { Task5Component } from './tasks/task5/task5.component';
import { Task6Component } from './tasks/task6/task6.component';
import { Task7Component } from './tasks/task7/task7.component';
import { Task8Component } from './tasks/task8/task8.component';
import { Task9Component } from './tasks/task9/task9.component';
import { Task10Component } from './tasks/task10/task10.component';
import { TasklistComponent } from './tasks/tasklist/tasklist.component';

const routes: Routes = [
  {
    path: 'task-list',
    title: '10 Angular Tasks',
    component: TasklistComponent,
  },
  {
    path: 'task-2',
    title: '2nd Task ツ',
    component: Task2Component,
  },
  {
    path: 'task-3',
    title: '3rd Task ツ',
    component: Task3Component,
  },
  {
    path: 'task-4',
    title: '4th Task ツ',
    component: Task4Component,
  },
  {
    path: 'task-5',
    title: '5th Task ツ',
    component: Task5Component,
  },
  {
    path: 'task-6',
    title: '6th Task ツ',
    component: Task6Component,
  },
  {
    path: 'task-7',
    title: '7th Task ツ',
    component: Task7Component,
  },
  {
    path: 'task-8',
    title: '8th Task ツ',
    component: Task8Component,
  },
  {
    path: 'task-9',
    title: '9th Task ツ',
    component: Task9Component,
  },
  {
    path: 'task-10',
    title: '10th Task ツ',
    component: Task10Component,
  },
  { 
    path: '', 
    redirectTo: '/task-list', 
    pathMatch: 'full' 
  },
  {   
    path: '**', 
    redirectTo: '/task-list' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
