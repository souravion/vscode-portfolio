import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  topIcons = [
    { icon: 'assets/sidebar/documents-outline.svg', route: '/', tooltip: 'Explorer' },
    { icon: 'assets/sidebar/git-branch-outline.svg', route: '/github', tooltip: 'Search', badge: 3 },
    { icon: 'assets/sidebar/code-slash-outline.svg', route: '/project', tooltip: 'Source Control' },
    { icon: 'assets/sidebar/mail-outline.svg', route: '/contact', tooltip: 'contact' }
  ];

  bottomIcons = [
    { icon: 'assets/sidebar/person-circle-outline.svg', route: '/about', tooltip: 'Accounts', badge: 1 },
    { icon: 'assets/sidebar/settings-outline.svg', route: '/settings', tooltip: 'Settings' }
  ];
}
