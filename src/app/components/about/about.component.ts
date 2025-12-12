import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about-section">
      <div class="container">
        <h2>About Me</h2>
        <div class="row align-items-center">
          <div class="col-md-6">
            <img src="assets/dev-pic.jpeg" alt="Developer" class="img-fluid">

          </div>
          <div class="col-md-6">
            <p>
              I'm a passionate full-stack developer with 2+ years of professional experience building scalable web applications. 
              I specialize in creating robust backend systems and responsive frontend interfaces.
            </p>
            <p>
              My expertise spans across Java, Angular, Spring Boot, Node.js, and Express.js. I've successfully delivered multiple 
              projects including tenant management systems, sales applications, and procurement platforms.
            </p>
            <p>
              I'm committed to writing clean, maintainable code and staying updated with the latest technologies in web development.
            </p>

              <p>
              In addition to development, I’ve received professional training on SAP Emarsys (Marketing Cloud) — gaining hands-on experience with creating and automating email campaigns, personalization through segmentation, and analyzing campaign performance using Emarsys’s Smart Insights and Automation Center.
             </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class AboutComponent {}