import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  email=''
  password=''
  fullname=''

  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private router: Router
  ) {
    this.registrationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullname: ['', Validators.required], 
      address: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^[6789][0-9]{9}$')]],
      numberOfGuests: ['', [Validators.required, Validators.min(1)]], 
      functionDate: ['', Validators.required],
      password: ['', [Validators.required, Validators.min(6)]]
    });
  }

  isFormValid() {
    return this.registrationForm.valid;
  }

  onSubmit() {
    this.router.navigate(['confirmation']);
    emailjs
  .send('service_hksa34h', 'template_xt58p0e', {
    email: this.email,
    fullname: this.fullname, 
      address: '',
      mobile: '',
      numberOfGuests: '', 
      functionDate: '',
      password: this.password,
    publicKey: '',
  })
  .then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (err) => {
      console.log('FAILED...', err);
    },
  );
  }
}
