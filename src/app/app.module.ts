import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';
import { Task2Component } from './tasks/task2/task2.component';
import { TasklistComponent } from './tasks/tasklist/tasklist.component';
import { TaskComponentComponent } from './tasks/task-component/task-component.component';
import { Task3Component } from './tasks/task3/task3.component';
import { Task4Component } from './tasks/task4/task4.component';
import { Task5Component } from './tasks/task5/task5.component';
import { Task6Component } from './tasks/task6/task6.component';
import { Task7Component } from './tasks/task7/task7.component';
import { Task8Component } from './tasks/task8/task8.component';
import { Task9Component } from './tasks/task9/task9.component';
import { Task10Component } from './tasks/task10/task10.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { CreditCardFormatPipe } from './pipes/credit-card-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CardComponent,
    Task2Component,
    TasklistComponent,
    TaskComponentComponent,
    Task3Component,
    Task4Component,
    Task5Component,
    Task6Component,
    Task7Component,
    Task8Component,
    Task9Component,
    Task10Component,
    AccordionComponent,
    CreditCardFormatPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
