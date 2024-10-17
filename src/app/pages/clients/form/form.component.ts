import { Component, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseComponent } from '@components/base-component';
import { FormPageComponent, IProcessConfiguration } from '@components/form-page/form-page.component';
import { MaterialModule } from '@modules/material.module';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormPageComponent, MaterialModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export default class FormComponent extends BaseComponent {
  actionSettings: WritableSignal<IProcessConfiguration>;

  constructor() {
    super();

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      cellphone: new FormControl('', [Validators.required])
    });

    this.actionSettings = signal({
      save: () => this.save()
    });
  }

  save() {
    return true;
  }
}
