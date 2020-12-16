import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class GetErrorMessagesService {
  getErrorMessage(formGroup: FormGroup, inputType: string) {
    if (inputType === "email") {
      if (formGroup.get("email").hasError("required")) {
        return "You must enter a value!";
      }

      return formGroup.get("email").hasError("email") ? "Not a valid email!" : "";
    }

    if (inputType === "password") {
      if (formGroup.get("password").hasError("required")) {
        return "You must enter a value!";
      }

      return formGroup.get("password").hasError("minlength") ? "Password must be at least 8 characters long!" : "";
    }

    if (inputType === "confirmPassword") {
      if (formGroup.get("confirmPassword").hasError("required")) {
        return "You must enter a value!";
      }

      if (formGroup.get("confirmPassword").hasError("passwordMismatch")) {
        return "Passwords do not match!";
      }

      return formGroup.get("confirmPassword").hasError("minlength") ? "Password must be at least 8 characters long!" : "";
    }
  }
}
