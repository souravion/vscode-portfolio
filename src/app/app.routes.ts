import { Routes } from '@angular/router';
import { LayoutComponent } from './layouts/layout.component';
import { HomeComponent } from './features/home/home.component';
import { AboutmeComponent } from './features/aboutme/aboutme.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ContactComponent } from './features/contact/contact.component';
import { GithubComponent } from './features/github/github.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component:AboutmeComponent},
      { path: 'project', component:ProjectsComponent},
      { path: 'github', component:GithubComponent},
      { path: 'contact', component:ContactComponent},
      // more routes
    ]
  }
];
