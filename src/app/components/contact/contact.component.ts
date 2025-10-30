import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
   imports: [CommonModule, FormsModule],
 template: `
    <section id="contact" class="contact-section">
      <div class="container">
        <h2>Get In Touch</h2>
        <div class="row justify-content-center">
          <div class="col-md-6">
            <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <div class="mb-3">
                <label class="form-label">Name</label>
                <input 
                  type="text" 
                  class="form-control" 
                  [(ngModel)]="formData.name" 
                  name="Your Name"
                  required
                >
              </div>
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input 
                  type="email" 
                  class="form-control" 
                  [(ngModel)]="formData.email" 
                  name="Enter Your email"
                  required
                >
              </div>
              <div class="mb-3">
                <label class="form-label">Message</label>
                <textarea 
                  class="form-control" 
                  rows="5"
                  [(ngModel)]="formData.message" 
                  name="Write the Message"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
        <div class="contact-info">
          <div class="row">
            <div class="col-md-4">
              <div class="contact-info-item">
                <p>Email</p>
                <p>rathodeamit1870&#64;gmail.com</p>

              </div>
            </div>
            <div class="col-md-4">
              <div class="contact-info-item">
                <p>Phone</p>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="contact-info-item">
                <p>Location</p>
                <p>Your City, Country</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,

})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    const serviceID = 'service_idcw1kl';
    const templateID = 'template_rkttn2j';
    const publicKey = 'EtD0RNGkecaPbFjqq';

    emailjs.send(serviceID, templateID, this.formData, publicKey)
      .then(() => {
        alert('✅ Message sent successfully!');
        this.formData = { name: '', email: '', message: '' };
        console.log(this.formData,'here consoled the  formdata');
        
      }, (error) => {
        console.error('FAILED...', error);
        alert('❌ Failed to send message. Please try again.');
      });
  }
}
