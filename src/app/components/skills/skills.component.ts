import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="skills-section">
      <div class="container">
        <h2>Skills</h2>
        <div class="row">
          <div class="col-md-6" *ngFor="let category of skillCategories">
            <div class="skill-category">
              <h3>{{ category.name }}</h3>
              <div>
                <span class="skill-tag" *ngFor="let skill of category.skills">{{ skill }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class SkillsComponent {
  skillCategories = [
    {
      name: 'Backend',
      skills: ['Java','JavaScript','TypeScript', 'Spring Boot', 'Node.js', 'Express.js','Sequelize','Microservices']
    },
    {
      name: 'Frontend',
      skills: ['Angular','Syncfusion','PrimeNG','ApexChart','Chart.Js','Bootstrap']
    },
    {
      name: 'Tools & Principles',
      skills: ['Docker','Git', 'SOLID', 'OOP','Firebase','AWS Basics','System Design-Basics (LLD)']
    },
    {
      name: 'Database & Other Technologies',
      skills: ['PostgreSQL', 'MySQL','RESTful APIs','SAP Sales Cloud','SAP Service Cloud','Emarsys' ]
    },
    
  ];
}