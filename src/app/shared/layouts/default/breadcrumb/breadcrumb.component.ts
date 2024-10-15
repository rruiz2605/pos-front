import { Component, effect, input, signal } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  iconName = input('');
  title = input.required<string>();
  subtitles = signal<string[]>([]);

  constructor() { 
    effect(() => {
      if (this.title()) {
        this.subtitles.set([]);
        // this.subtitles.set(['Dashboard', 'Template']);
      }
    }, { allowSignalWrites: true });
  }
}
