import { Component } from '@angular/core';

@Component({
  selector: 'app-statusbar',
  standalone: true,
  imports: [],
  templateUrl: './statusbar.component.html',
  styleUrl: './statusbar.component.scss'
})
export class StatusbarComponent {
  gitBranch = 'master*';
}
