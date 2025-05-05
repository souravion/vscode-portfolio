import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private readonly route = inject(Router)
  readonly devinfo = {
    greeting: "Hi, I am",
    name: "Sourav Halder",
    description: "Building modern web and mobile experiences",
    designation: "Software Engineer"
  }
  viewProject():void{
    this.route.navigateByUrl('/project')
  }
}
