import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

export interface ITimeLineItem {
  title: string;
  description: string;
  date: string;
}

@Component({
  selector: 'app-time-line',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './time-line.component.html',
  styleUrl: './time-line.component.scss'
})
export class TimeLineComponent {
  class = input('');
  items = input.required<ITimeLineItem[]>();
}
