import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseComponent } from '@components/base-component';
import { FormControlModule } from '@modules/form-control.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormControlModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent extends BaseComponent {

  constructor() {
    super();

    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });

    this.activeValidations({
      username: [
        { error: 'required', message: 'Debe ingresar el usuario' }
      ],
      password: [
        { error: 'required', message: 'Debe ingresar la contraseña' },
      ]
    });
  }

  login() {
    if (this.isValidForm()) {
      this.router.navigate(['/home']);
    }
  }
}
