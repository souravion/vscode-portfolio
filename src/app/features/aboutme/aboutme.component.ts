import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent {
  isLoaded = true;
  readonly techStack: string[] = ['Angular','Ionic','JavaScript/TypeScript','NGRX','Node.js','MongoDB','Express.js'];
  readonly aboutMeText: string = `Hey! I'm a software engineer from Kolkata, India, specializing in hybrid mobile app and web app development within the Angular and Ionic ecosystem. I primarily work with JavaScript/TypeScript to create seamless mobile and web experiences.`;
  readonly aboutMeSubText: string = `I'm focused on frontend development with Angular and Ionic, but I also work with Node.js, MongoDB, and Express to build backend systems for my personal projects.`;
  readonly experienceText: string = `Currently working at StockEdge as a Software Engineer, where I collaborate with a team of 12 frontend engineers to design and develop cutting-edge trading analytics tools. I contribute to building scalable web and mobile applications using Angular and Ionic, ensuring performance, usability, and a seamless user experience for thousands of traders and investors.`;
  readonly beyondCodingText: string = `I enjoy playing cricket, reading detective and spiritual books, and watching tech podcasts—or simply unwinding in my free time.`;

  readonly developerInfo = {
    name: 'Sourav Halder',
    role: 'Software Engineer',
  };

  ngOnInit(): void {
    document.title = `${this.developerInfo.name} | Portfolio`;
  }

}
