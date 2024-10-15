import { CommonModule } from '@angular/common';
import { Component, computed, input, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent implements OnInit {
  type = input.required<'info' | 'warn' | 'danger' | 'success'>();
  ngClass = computed(() => `text-${this.type()} bg-${this.type()} ${this.showShadow() ? 'shadow-lg' : ''}`);
  // Este comentario se hace para que TailwindCSS cree las clases de colores
  // text-success bg-success text-warn bg-warn text-danger bg-danger text-info bg-info

  title = input.required<string>();
  content = input.required<string>();
  textInline = input<boolean>(false);
  showShadow = input<boolean>(true);
  showIcon = input<boolean>(true);
  iconName = signal('');

  constructor() { }

  ngOnInit(): void {
    if (this.showIcon()) {
      this.iconName.set(this.type() === 'info' ? 'info' :
                        this.type() === 'warn' ? 'warning' :
                        this.type() === 'danger' ? 'error' : 
                                                   'check_circle');
    }
  }
}
