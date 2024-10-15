import { CommonModule } from '@angular/common';
import { Component, computed, contentChild, effect, input } from '@angular/core';
import { FormInputDirective } from '@directives/form-input.directive';

@Component({
  selector: 'form-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss'
})
export class FormFieldComponent {
  label = input('');
  class = input('');
  formInput = contentChild.required(FormInputDirective);
  errorMessage = input('');
  infoMessage = input('');
  message = computed(() => this.errorMessage() || this.infoMessage());
  isSuccess = input(false);
  colorClass = computed(() => this.errorMessage() ? 'text-danger' : this.isSuccess() ? 'text-success' : 'text-normal');

  constructor() {
    effect(() => {
      const color = this.errorMessage() ? 'border-danger text-danger' : 
                    this.isSuccess() ?    'border-success text-success' : 
                                          'border-normal text-normal';
      this.formInput().class = `peer 
        px-2
        placeholder-transparent
        h-10 
        w-full 
        rounded-lg 
        border 
        ${color}
        focus:outline-none
        focus:border-2`;
    });
  }

  labelClick() {
    (this.formInput().nativeElement as any).focus();
  }
}
