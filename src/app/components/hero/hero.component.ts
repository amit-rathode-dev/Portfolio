import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero-section">
      <div class="container">
        <h1>Full Stack <span class="highlight">Developer</span></h1>
        <p>3 Years of Experience | Java | Angular | Spring Boot | Node.js | Express.js</p>
        <div>
                <button class="btn btn-primary me-3">
                <a href="https://github.com/amit-rathode-dev"
                  target="_blank" 
                  rel="noopener noreferrer" 
                   style="color: white; text-decoration: none;">
                 View My Work
            </a>
          </button>

          <button class="btn btn-outline-primary " (click)="downloadCv()">Download CV</button>
        </div>
        <div class="stats">
          <div class="stat-item">
            <h3>3</h3>
            <p>Years Experience</p>
          </div>
           <a class="nav-link" href="#projects">
          <div class="stat-item">
            <h3>5+</h3>
            <p>Projects Completed</p>
          </div>
          </a>
          <a class="nav-link" href="#skills">Skills
          <div class="stat-item">
            <h3>10+</h3>
            <p>Technologies</p>
            </div>
            </a>
            </div>
      </div>
    </section>
  `,
  styles: []
})
export class HeroComponent {

  downloadCv() {
    const link = document.createElement('a');
    link.href = 'assets/Amit_Rathode_Resume.pdf';

    link.download = 'Amit_Rathode_Resume.pdf';
    link.click();
  }

}