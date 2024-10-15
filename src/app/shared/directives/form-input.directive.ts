import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[formInput]',
  standalone: true
})
export class FormInputDirective {
  @HostBinding('placeholder') placeholder = '';
  @HostBinding('class') class = '';
  
  nativeElement: ElementRef;

  constructor(private er: ElementRef) {
    this.nativeElement = er.nativeElement;
  }
}
