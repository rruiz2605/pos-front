import { Component, input, output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '@modules/material.module';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [MaterialModule, MatCardModule, RouterLink],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.scss'
})
export class ListPageComponent {
  mainTitle = input.required<string>();
  titleList = input.required<string>();
  showAddButton = input<boolean>(true);
  titleAddButton = input<string>('Nuevo');

  searchClick = output();
  clearFiltersClick = output();
}
