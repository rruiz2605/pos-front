import { CommonModule } from '@angular/common';
import { Component, OnInit, output, signal } from '@angular/core';
import { IMenuItem } from '@models/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  isOpenNav = signal(false);
  changeStateNav = output<boolean>();
  isDark = signal(false);

  menuItems = signal<IMenuItem[]>([]);
  selectOption = output<IMenuItem>();

  constructor(private router: Router) {
      if (localStorage.getItem('dark') === 'true') {
        this.toggleMode();
      }
  }
  
  ngOnInit(): void {
    this.menuItems.set([
      { title: 'Dashboard', iconName: 'analytics', url: '' },
      { title: 'Enviar Archivos', iconName: 'upload_file', url: '/archivos' },
      { title: 'Observaciones', iconName: 'report', url: '/observaciones' },
      { title: 'Reportes', iconName: 'summarize', url: '/reportes' }
    ]);
    this.selectOption.emit(this.menuItems()[0]);
  }

  toggleNav() {
    this.isOpenNav.update(x => !x);
    this.changeStateNav.emit(this.isOpenNav());
  }

  toggleMode() {
    this.isDark.update(x => !x);
    localStorage.setItem('dark', this.isDark().toString());

    if (this.isDark()) {
      document.documentElement.classList.add('dark');
    }
    else {
      document.documentElement.classList.remove('dark');
    }
  }

  selectOptionClick(item: IMenuItem) {
    this.selectOption.emit(item);
    this.router.navigate([item.url]);
  }
}
