import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';
import { Task2Component } from './tasks/task2/task2.component';
import { TasklistComponent } from './tasks/tasklist/tasklist.component';
import { TaskComponentComponent } from './tasks/task-component/task-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CardComponent,
    Task2Component,
    TasklistComponent,
    TaskComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
