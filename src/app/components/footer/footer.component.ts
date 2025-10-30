import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer>
      <div class="container">
        <div class="row mb-4">
          <div class="col-md-4">
            <h3>Portfolio</h3>
            <p>Full Stack Developer | 2.5+ Years Experience</p>
          </div>
          <div class="col-md-4">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about" target="_blank" rel="noopener noreferrer">About</a></li>
              <li><a href="#skills" target="_blank" rel="noopener noreferrer">Skills</a></li>
              <li><a href="#projects" target="_blank" rel="noopener noreferrer">Projects</a></li>
              <li><a href="#contact" target="_blank" rel="noopener noreferrer">Contact</a></li>
            </ul>
          </div>
          <div class="col-md-4">
            <h3>Follow Me</h3>
            <div>
              <a href="https://github.com/amit-rathode-dev" class="me-3" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/amit-rathode-4474291b6/" class="me-3" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">

        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {}