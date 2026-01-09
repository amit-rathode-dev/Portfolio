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

          <!-- IMAGE (no anchor wrapper) -->
          <img
            [src]="project.image"
            [alt]="project.title"
            class="project-image"
          />

          <div class="project-card-body">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>

            <div>
              <span
                class="tech-tag"
                *ngFor="let tech of project.technologies"
              >
                {{ tech }}
              </span>
            </div>

            <!-- ✅ ONLINE PROJECT -->
            <ng-container *ngIf="!project.offline; else offlineBlock">
              <a
                *ngFor="let p of project.links"
                [href]="p.url"
                target="_blank"
                class="project-link"
              >
                <span
                  style="display: inline-block;
                         align-items: center;
                         padding: 4px 10px;
                         margin: 2px;
                         background: #ffebee;
                         color: #c62828;
                         font-size: 14px;
                         border-radius: 4px;
                         font-weight: 600;"
                         
                         >
                  Visit Live Project <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; →
                </span>
              </a>
            </ng-container>

            <!-- ❌ OFFLINE PROJECT (ONLY ONCE) -->
            <ng-template #offlineBlock>
              <span
                style="display: inline-block;
                       padding: 4px 10px;
                       background: #ffebee;
                       color: #c62828;
                       font-size: 14px;
                       border-radius: 4px;
                       font-weight: 600;">
                Server temporarily unavailable
                <br />
                Please try again shortly.
              </span>
            </ng-template>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  `,
  styles: [

  ]
})
export class ProjectsComponent {
projects = [
  {
    title: 'Tenant Management System',
    description: 'A comprehensive platform for managing tenant information, lease agreements, and maintenance requests.',
    technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL'],
    image: 'assets/portfolio-website-design.png',
    offline: true,
    links: [
      { url: 'http://192.168.140.82.compute-1.amazonaws.com/tenant-management-system/' }
    ]
  },
  {
    title: 'Sales & Lead Management',
    description: 'CRM application for tracking sales leads, managing customer relationships, and generating reports.',
    technologies: ['Node.js', 'Express.js', 'Angular', 'MySQL'],
    image: 'assets/lead-management-crm-interface.jpg',
    offline: true,
    links: [
      { url: 'http://192.168.140.82.compute-1.amazonaws.com/Sales-application/' }
    ]
  },
  {
    title: 'Procurement Platform',
    description: 'Enterprise procurement system for managing vendor relationships, purchase orders, and inventory.',
    technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL'],
    image: 'assets/procurement-management-system.jpg',
    offline: true,
    links: [
      { url: 'http://192.168.140.82.compute-1.amazonaws.com/Procrument-management/' }
    ]
  },
  {
    title: 'Freelancing Marketplace',
    description: 'Platform connecting freelancers with clients for project-based work and skill-based services.',
    technologies: ['Node.js', 'Express.js', 'Angular', 'MySQL'],
    image: 'assets/freelance-marketplace-platform.jpg',
    offline: false,
    links: [
      { url: 'https://sample-project-4084e.web.app/' },
      { url: 'https://poc-plan-production-master.web.app/' }
    ]
  }
];

}