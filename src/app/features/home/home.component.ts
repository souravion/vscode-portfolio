import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly devinfo = {
    greeting: "Hi, I am",
    name: "Sourav Halder",
    description: "Building modern web and mobile experiences",
    designation: "Software Engineer"
  }
}
