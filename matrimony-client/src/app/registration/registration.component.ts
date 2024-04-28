import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { UserService } from '../services/user-service.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {


  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private userService: UserService
  ) {
    this.registrationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullname: ['', Validators.required], // Add validation for fullname
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

  onSubmit(e: Event) {
        emailjs
          .sendForm('service_hksa34h', 'template_xt58p0e', e.target as HTMLFormElement , {
            publicKey: 'yoF2P1NACJyTjTxOS',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              window.location.reload();
            },
            (error) => {
              console.log('FAILED...', (error as EmailJSResponseStatus).text);
            },
          );
      }
  }
