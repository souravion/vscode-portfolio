import { Component } from '@angular/core';
import { Project } from './project.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  readonly heading = 'My Projects';
  readonly description = `Here are some of the projects and libraries I've built using Angular, TypeScript, and other modern technologies. These showcase my skills in frontend development, UI design, and open-source contribution.`;

  readonly projects: Project[] = [
    {
      title: 'Stock Analysis Made Simple',
      description: 'Get data-backed stock ideas & strategies for short-term & long-term trades. Compare stocks by sector, fundamentals & technicals for smarter decisions. Trending Stocks.',
      imageUrl: 'assets/projectlogo/stockedge.png',
      routeLink:'https://web.stockedge.com/',
      techStack: ['TypeScript', 'Angular', 'Ionic', 'SCSS']
    },
    {
      title: 'ng-route-logger',
      description: 'ng-route-logger is a simple and powerful Angular library that helps you track page navigation times inside your Angular application.',
      imageUrl: 'assets/projectlogo/npm.png',
      routeLink:'https://www.npmjs.com/package/ng-route-logger',
      techStack: ['Angular', 'TypeScript']
    },
    {
      title: 'Convert String To Literals',
      description: 'The Converting Strings to Template Literals extension provides functionality to convert regular strings to template strings',
      imageUrl: 'assets/projectlogo/extentions.png',
      routeLink:'https://marketplace.visualstudio.com/items/?itemName=Souravhalder.converting-strings-to-template-literals',
      techStack: ['TypeScript']
    },
    {
      title: 'Colorful Console Text',
      description: 'The Colorful Console Text library provides utility functions for applying various text styles and colors to terminal/console output.',
      imageUrl: 'assets/projectlogo/npm.png',
      routeLink:'https://www.npmjs.com/package/console-color-log',
      techStack: ['TypeScript']
    }
  ];

  openProject(url: string) {
    window.open(url, '_blank');
  }
}
