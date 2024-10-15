import { Component, input } from '@angular/core';

@Component({
  selector: 'app-resumen-card',
  standalone: true,
  imports: [],
  templateUrl: './resumen-card.component.html',
  styleUrl: './resumen-card.component.scss'
})
export class ResumenCardComponent {
  iconName = input.required<string>();
  title = input.required<string>();
  text = input.required<string>();

  constructor() { }
}
