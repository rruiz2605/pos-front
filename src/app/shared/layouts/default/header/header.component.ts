import { CommonModule } from '@angular/common';
import { Component, input, OnInit, signal } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { SecurityService } from '@services/security.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isOpenNav = input.required();
  userName = signal<string>('');
  userIcon = signal<SafeHtml>('');
  chevronDownIcon = signal<SafeHtml>('');

  constructor(private securityService: SecurityService) { 
  }

  ngOnInit(): void {
    this.userName.set(this.securityService.sessionUser.name);
  }
}
