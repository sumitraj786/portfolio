import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'CGI Trade360 Banking',
      bullets: [
        'Enhanced the CGI Trade360 SaaS platform, improving performance and reliability by delivering scalable software, infrastructure, and support solutions used by global trade businesses.',
        'Upgraded and enhanced core banking features, enabling banks to deliver end-to-end trade, payables, receivables, and cash management services — improving operational efficiency and client satisfaction.'
      ],
      tech: 'Java · Spring Boot · Microservices · Hibernate · Angular · Kafka · GitLab CI/CD'
      // No URL since we don't want it clickable
    },
    {
      title: 'KIBYO (Grocery Delivery Application)',
      bullets: [
        'Founded and built KIBYO, a grocery delivery app with Flutter, Firebase, and Spring Boot, supporting 500+ users with real-time browsing, ordering, and tracking.',
        'Architected backend APIs and a real-time order management system, optimizing routing and database design to reduce delivery coordination time measurably.',
        'Designed an interactive UI that boosted user engagement and retention through modern Flutter widgets and smooth navigation.',
        'Note: Currently its private and in-progress to maintain the privacy and integrity of the application'
      ],
      tech: 'Flutter · Firebase · Spring Boot · REST APIs',
      url: 'https://github.com/sumitraj786' // add your GitHub repo URL
    },
    {
      title: 'AWS-Enabled Real-Time Messaging Application (Spring Boot & REST API)',
      bullets: [
        'Designed and deployed a real-time chat application using Spring Boot, REST APIs, and AWS cloud, achieving 99.9% uptime through scalable and fault-tolerant architecture.',
        'Built and streamlined real-time messaging and notification modules, reducing latency notably and significantly enhancing overall user experience while showcasing strong system design expertise.'
      ],
      tech: 'Java · Spring Boot · AWS · WebSockets · HTML · SCSS',
      url: 'https://github.com/sumitraj786'
    },
    {
      title: 'Walmart Heap Optimization',
      bullets: [
        'Implemented an optimized heap data structure in Java for logistics, improving processing throughput (~1.3x) and reducing overhead for shipping pipelines.',
        'Completed the Software Engineering internship at Walmart, delivering high-impact technical solutions across multiple teams.',
        'Engineered a comprehensive entity-relationship (ER) diagram to design a robust database for the pet department, ensuring scalability and alignment with all business requirements.'
      ],
      tech: 'Java · Algorithms · Data Structures · OOPs',
      url: 'https://github.com/sumitraj786'
    }
  ];
}
