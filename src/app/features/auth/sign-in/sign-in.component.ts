import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GetErrorMessagesService } from '../services/get-error-messages.service';
import { FirebaseService } from 'src/app/core/services/firebase.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  hasAuthError: boolean = false;
  getErrorMessage;

  constructor(
    private getErrorMessages: GetErrorMessagesService,
    private firebase: FirebaseService
  ) { }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "password": new FormControl(null, [Validators.required, Validators.minLength(6)])
    });

    this.getErrorMessage = this.getErrorMessages.getErrorMessage;
  }

  onSubmit(): void {
    if (this.signInForm.valid) {
      const { email, password } = this.signInForm.value;
      this.firebase.signIn(email, password).catch(() => {
        this.hasAuthError = true;
      });
    }
  }
}
