import { Component, signal } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppService } from '@services/app.service';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent {
  show = signal<boolean>(false);

  constructor(appService: AppService) {
    appService.showSpinner$.subscribe(show => this.show.set(show));
  }
}
