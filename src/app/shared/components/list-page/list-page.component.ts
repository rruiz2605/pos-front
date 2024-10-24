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
  titleList = input.required<string>();
  showAddButton = input<boolean>(true);
  addButtonTitle = input<string>('Nuevo');
  addRoute = input<string | any[]>(['./agregar']);

  searchClick = output();
  clearFiltersClick = output();
}
