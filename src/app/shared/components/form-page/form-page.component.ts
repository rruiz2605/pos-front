import { Component, effect, input, output, signal, WritableSignal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialModule } from '@modules/material.module';
import { Observable } from 'rxjs';

export interface IProcessConfiguration {
  runDefaultSave?: boolean;
  successMessage?: string;
  preSave?: () => boolean | Observable<boolean>;
  additionalValidations?: () => boolean | Observable<boolean>;
  save: () => boolean | Observable<any>;
  postSave?: (success: boolean, error: any) => void;
  urlToReturn?: string;
  runDefaultClear?: boolean;
  clear?: () => void;
  runDefaultCancel?: boolean;
  preCancel?: () => boolean | Observable<boolean>;
  cancel?: () => void;
}

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [MaterialModule, MatCardModule, MatMenuModule],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.scss'
})
export class FormPageComponent {
  showSaveButton = input<boolean>(true);
  saveButtonText = input<string>('Guardar');
  saveButtonIcon = input<string>('save');
  showClearButton = input<boolean>(true);
  showCancelButton = input<boolean>(true);
  cancelButtonText = input<string>('Cancelar');
  cancelButtonIcon = input<string>('cancel');
  form = input.required<FormGroup>();
  actionSettings = input<IProcessConfiguration>();
  settings: IProcessConfiguration;
  
  constructor(private router: Router,
    private activeRoute: ActivatedRoute) {
      const defaultSettings: IProcessConfiguration = {
        runDefaultSave: true,
        successMessage: '¡Registro guardado correctamente!',
        save: () => true,
        urlToReturn: '..',
        runDefaultClear: true,
        runDefaultCancel: true
      };

      this.settings = defaultSettings;

      effect(() => {
        this.settings = {
          ...defaultSettings,
          ...this.actionSettings()
        };
      });
  }

  save() {
    if (this.settings.runDefaultSave === false) {
      this.settings.save();
      return;
    }

    if (this.settings.preSave) {
      this.executeFunction(this.settings.preSave!, () => this.executeValidation());
      return;
    }

    this.executeValidation();
  }

  executeFunction(fn: () => boolean | Observable<boolean>, next: () => void) {
    const result = fn();
    if (typeof result === 'boolean') {
      if (result) {
        next();
      }
      return;
    }

    result.subscribe({
      next: (res) => {
        if (res) {
          next();
        }
      }
    });
  }

  executeValidation() {
    this.form().markAllAsTouched();
    this.form().updateValueAndValidity();
    const formIsValid = this.form().valid;

    if (!formIsValid) {
      return;
    }
    
    if (this.settings.additionalValidations) {
      this.executeFunction(this.settings.additionalValidations!, () => this.executeSave());
      return;
    }
    
    this.executeSave();
  }

  executeSave() {
    const saveResult = this.settings.save();

    if (typeof saveResult === 'boolean') {
      this.processResult(saveResult);
      return;
    }

    saveResult.subscribe({
      next: (result) => {
        this.processResult(result);
      },
      error: (error) => {
        this.processResult(false, error);
      }
    });
  }

  processResult(success: boolean, error?: any) {
    if (success) {
      // this.dialogService.showSuccess({ 
      //   text: this.successMessage()
      // })
      // .subscribe(() => {
      this.router.navigate([this.settings.urlToReturn], { relativeTo: this.activeRoute });
      // });
    } else {
      // if (this.showErrorMessage()) {
      //   // this.dialogService.show({ 
      //   //   title: 'Mensaje',
      //   //   text: error.message,
      //   //   showCancel: false
      //   // });
      // }
    }
  }

  clear() {
    if (this.settings.runDefaultClear) {
      this.form().reset();
    }
    this.settings.clear?.();
  }

  cancel() {
    if (this.settings.runDefaultCancel) {
      this.router.navigate([this.settings.urlToReturn], { relativeTo: this.activeRoute });
    }
    this.settings.cancel?.();
  }

}
