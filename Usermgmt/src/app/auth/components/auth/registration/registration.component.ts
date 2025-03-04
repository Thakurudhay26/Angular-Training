import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatchvValidator } from '../../../utils/passwordValidators';

@Component({
  selector: 'app-registration',
  standalone: false,

  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      },
      { Validators: passwordMatchvValidator }
    );
  }
  registerSubmit() {
    if (this.registerForm.valid) {
      //it will return true when all the validations are verified including angular (length, reuqired, email) and custom (pasword matching)
      console.log('Success' + this.registerForm.value);
      //this will not be able to print the object, so write the following code
      console.log('Success' + JSON.stringify(this.registerForm.value));
    } else {
      console.log(this.registerForm.errors);
      //this.printErrors();
    }
  }
  printErrors() {
    const controls = this.registerForm;
  }
}
