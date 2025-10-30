import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="projects-section">
      <div class="container">
        <h2>Projects</h2>
        <div class="row">
          <div class="col-md-6" *ngFor="let project of projects">
            <div class="project-card">
              <img [src]="project.image" [alt]="project.title">
              <div class="project-card-body">
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
                <div>
                  <span class="tech-tag" *ngFor="let tech of project.technologies">{{ tech }}</span>
                </div>
                <a href="#" class="project-link">View Project →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Tenant Management System',
      description: 'A comprehensive platform for managing tenant information, lease agreements, and maintenance requests.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL'],
      image: 'assets/portfolio-website-design.png?height=300&width=450'
    },
    {
      title: 'Sales & Lead Management',
      description: 'CRM application for tracking sales leads, managing customer relationships, and generating reports.',
      technologies: ['Node.js', 'Express.js', 'Angular', 'MySQL'],
      image: 'assets/lead-management-crm-interface.jpg?height=300&width=400'
    },
    {
      title: 'Procurement Platform',
      description: 'Enterprise procurement system for managing vendor relationships, purchase orders, and inventory.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL'],
      image: 'assets/procurement-management-system.jpg?height=300&width=400'
    },
    {
      title: 'Freelancing Marketplace',
      description: 'Platform connecting freelancers with clients for project-based work and skill-based services.',
      technologies: ['Node.js', 'Express.js', 'Angular', 'MySQL'],
      image: 'assets/freelance-marketplace-platform.jpg?height=300&width=400'
    }
  ];
}