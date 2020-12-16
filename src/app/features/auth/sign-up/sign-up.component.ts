import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CustomValidationsService } from '../services/custom-validations.service';
import { GetErrorMessagesService } from '../services/get-error-messages.service';
import { FirebaseService } from 'src/app/core/services/firebase.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  hasAuthError: boolean = false;
  getErrorMessage;

  constructor(
    private fb: FormBuilder,
    private customValidationsService: CustomValidationsService,
    private getErrorMessages: GetErrorMessagesService,
    private firebase: FirebaseService
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      "email": ["", [Validators.required, Validators.email]],
      "password": ["", [Validators.required, Validators.minLength(6)]],
      "confirmPassword": ["", [Validators.required, Validators.minLength(6)]]
    },
      {
        validator: this.customValidationsService.passwordMatchValidator(
          "password",
          "confirmPassword"
        )
      }
    );

    this.getErrorMessage = this.getErrorMessages.getErrorMessage;
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      const { email, password } = this.signUpForm.value;
      this.firebase.signUp(email, password).catch(() => {
        this.hasAuthError = true;
      });
    }
  }
}
