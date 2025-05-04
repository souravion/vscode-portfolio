import { Injectable } from '@angular/core';
import { PortfolioFile } from './portfolio.interface';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  portfolioFiles:PortfolioFile[] = [
    { name: 'home.ts', type: 'typescript', route: '' },
    { name: 'about.html', type: 'html', route: '/about' },
    { name: 'github.md', type: 'markdown', route: '/github' },
    { name: 'project.json', type: 'json', route: '/project' },
    { name: 'contact.ts', type: 'typescript', route: '/contact' }
  ];

  getIconPath(type: string): string {
    return `assets/files/${type}.svg`;
  }

  getPortfolioFiles() {
    return this.portfolioFiles;
  }

}
