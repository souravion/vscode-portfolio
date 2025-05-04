import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { StatusbarComponent } from './statusbar/statusbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TabbarComponent } from './tabbar/tabbar.component';
import { ExploreComponent } from './explore/explore.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, StatusbarComponent, ToolbarComponent, SidebarComponent, TabbarComponent,ExploreComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  portfolioOpen = true;
  portfolioFiles = [
    { name: 'about.html', type: 'html', route:"" },
    { name: 'github.md', type: 'markdown', route:"/about" },
    { name: 'project.ts', type: 'typescript', route:"/project" },
    { name: 'contact.json', type: 'json', route:"/contact" }
  ];

  getIconPath(type: string): string {
    return `assets/files/${type}.svg`; // Or .png if your icons are in PNG
  }

  // tabs = [
  //   { label: 'home.ts', active: true },
  //   { label: 'about.ts', active: false },
  // ];
  // portfolioOpen = true;

  // activateTab(tab: any) {
  //   this.tabs.forEach(t => (t.active = false));
  //   tab.active = true;
  // }

  // closeTab(tab: any, event: MouseEvent) {
  //   event.stopPropagation();
  //   this.tabs = this.tabs.filter(t => t !== tab);
  //   if (tab.active && this.tabs.length) {
  //     this.tabs[0].active = true;
  //   }
  // }

  openTabs = [
    {
      name: 'about.html',
      icon: 'assets/icons/html.png',
      route: '/about',
    },
  ];

  activeTab = '/about';

  constructor(private router: Router) {}

  selectTab(tab: any) {
    this.activeTab = tab.route;
    this.router.navigateByUrl(tab.route);
  }

  closeTab(tab: any, event: MouseEvent) {
    event.stopPropagation();
    const index = this.openTabs.indexOf(tab);
    this.openTabs.splice(index, 1);

    if (this.activeTab === tab.route && this.openTabs.length) {
      this.selectTab(this.openTabs[0]);
    } else if (!this.openTabs.length) {
      this.router.navigateByUrl('/');
    }
  }

  // Optional: Add a tab programmatically if needed
  openTab(tab: any) {
    const exists = this.openTabs.find(t => t.route === tab.route);
    if (!exists) this.openTabs.push(tab);
    this.selectTab(tab);
  }
}
