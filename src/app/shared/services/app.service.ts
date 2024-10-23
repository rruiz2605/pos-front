import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  countRequests = 0;
  private showSpinnerSubject = new BehaviorSubject<boolean>(false);
  showSpinner$ = this.showSpinnerSubject.asObservable();

  show(): void {
    this.countRequests++;
    this.showSpinnerSubject.next(true);
  }

  hide() {
    this.countRequests--;
    if (this.countRequests === 0) {
      this.showSpinnerSubject.next(false);
    }
  }
}
