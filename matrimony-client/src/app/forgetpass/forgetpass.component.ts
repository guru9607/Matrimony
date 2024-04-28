import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-forgetpass',
  standalone: true,
  imports: [],
  templateUrl: './forgetpass.component.html',
  styleUrl: './forgetpass.component.css'
})
export class ForgetpassComponent {
  
  public onSubmit(e: Event) {
    e.preventDefault();
    console.log("submit");
    emailjs
      .sendForm('service_hksa34h', 'template_4x9byr7', e.target as HTMLFormElement , {
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
