import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Task2Component } from './tasks/task2/task2.component';
import { TasklistComponent } from './tasks/tasklist/tasklist.component';

const routes: Routes = [
  {
    path: 'task-list',
    component: TasklistComponent,
},
  {
    path: 'task-2',
    title: '2nd Task ツ',
    component: Task2Component,
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
