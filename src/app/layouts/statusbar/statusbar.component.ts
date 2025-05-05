import { Component } from '@angular/core';
import { environment } from '../../../environments/environments';
@Component({
  selector: 'app-statusbar',
  standalone: true,
  imports: [],
  templateUrl: './statusbar.component.html',
  styleUrl: './statusbar.component.scss'
})
export class StatusbarComponent {
  gitBranch = 'master*';
  onBranchClick():void {
    window.open(environment.gitUrl)
  }
}
