import { Component, OnInit, inject} from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms', style({ opacity: 1 }))
      ]),
    ]),
  ]
})
export class Task4Component implements OnInit {
  cardForm: FormGroup;  // Tworze FormGroup
  creditCardNumber?: string;
  savedCreditCardNumer?: string;

  private fb: FormBuilder = inject(FormBuilder)

  constructor() {
    // Inicjuje formę
    //Validators.required - zapewnia, że input nie będzie pusty
    //Validators.pattern(/^\d{16}$/) - zapewnia, że numer karty będzie składał się z 16 cyfr
    this.cardForm = this.fb.group({
      creditCard: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]]
    });
  }

  ngOnInit(): void {
  }

  SubmitNumber(): void {
    if (this.cardForm.valid) {
      this.creditCardNumber = this.cardForm.value.creditCard;
      this.savedCreditCardNumer = this.creditCardNumber;
      
      console.log(this.savedCreditCardNumer)

      this.cardForm.reset();
    } else {
      alert('Invalid credit card number. Please enter exactly 16 digits.');
    }
  }
}