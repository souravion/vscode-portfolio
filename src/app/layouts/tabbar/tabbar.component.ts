import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PortfolioService } from '../../core/services/portfolio/portfolio.service';
import { PortfolioFile } from '../../core/services/portfolio/portfolio.interface';

@Component({
  selector: 'app-tabbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tabbar.component.html',
  styleUrl: './tabbar.component.scss'
})
export class TabbarComponent {
  portfolioFiles:PortfolioFile[] = []
  portfolioOpen = true;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioFiles = this.portfolioService.getPortfolioFiles();
  }

  getIconPath(type: string): string {
    return this.portfolioService.getIconPath(type);
  }
}
