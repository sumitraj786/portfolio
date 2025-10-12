import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  exps = [
    {
      role: 'Software Engineer',
      company: 'CGI',
      period: 'July 2024 - Present',
      location: 'Bengaluru',
      bullets: [
        'Built an in-app email notification system that automatically sends over 500 messages daily with 100% reliability, reducing manual work and improving communication with users.',
        'Led the development of scalable backend systems using Java, Spring Boot, and microservices, improving system performance and reducing response times by 25–30%.',
        'Implemented multiple client-requested features from scratch across backend (Spring Boot APIs) and frontend (Angular), ensuring seamless end-to-end integration.',
        'Contributed to backend development of APIs and services, ensuring modular, testable code that increased test coverage by 87% using JUnit and Mockito.'
      ],
      logo: 'assets/experience/CGI_logo.png'
    },
    {
      role: 'Software Engineer Intern',
      company: 'Walmart Global Tech',
      period: 'Nov 2023 - Jan 2024',
      location: 'Bengaluru',
      bullets: [
        'Completed the Advanced Software Engineering internship at Walmart, delivering high-impact technical solutions across multiple teams.',
        'Designed and implemented an optimized heap data structure in Java for the shipping department, improving logistics data handling efficiency by ~1.3x faster and reducing processing overhead.',
        'Engineered a comprehensive entity-relationship (ER) diagram to design a robust database for the pet department, ensuring scalability and alignment with all business requirements.'
      ],
      logo: 'assets/experience/WALMART_logo.png'
    }
  ];
}
