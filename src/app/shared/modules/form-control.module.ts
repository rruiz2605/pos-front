import { NgModule } from '@angular/core';
import { FormFieldComponent } from '@components/form-field/form-field.component';
import { FormInputDirective } from '@directives/form-input.directive';

@NgModule({
  declarations: [],
  imports: [
    FormFieldComponent,
    FormInputDirective
  ],
  exports: [
    FormFieldComponent,
    FormInputDirective
  ]
})
export class FormControlModule { }
