import { Injectable } from '@angular/core';
import { SessionUser } from '@models/general';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  sessionUser: SessionUser;

  constructor() {
    this.sessionUser = new SessionUser();
    this.sessionUser.name = 'Renee Ruiz';
  }
}
