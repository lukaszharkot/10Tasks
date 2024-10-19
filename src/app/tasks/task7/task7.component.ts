import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CanItDeactivate } from 'src/app/interfaces/can-it-deactivate';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-task7',
  templateUrl: './task7.component.html',
  styleUrls: ['./task7.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms', style({ opacity: 1 }))
      ]),
    ]),
  ]
})
export class Task7Component implements OnInit {
  TaskForm: FormGroup;
  FormValue: any = {};
  private fb = inject(FormBuilder);

  constructor() {
    this.TaskForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    })
  }

  ngOnInit(): void {
  }

  saveForm(){
    if(this.TaskForm.valid){
      this.FormValue = this.TaskForm.value
      this.TaskForm.reset();
    }
  }
  
  canDeactivate(): boolean {
    if(this.TaskForm.dirty){
      return confirm('You have unsaved changes! Do you want to leave?');
    }
    return true;
  }

}
