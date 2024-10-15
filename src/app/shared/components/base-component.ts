import { inject, signal } from "@angular/core";
import { FormGroup, StatusChangeEvent, TouchedChangeEvent } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { IValidationByField } from "@models/general";
import { BehaviorSubject } from "rxjs";

export class BaseComponent {
    router = inject(Router);
    activeRoute = inject(ActivatedRoute);

    form: FormGroup = new FormGroup({});
    errorMessages = signal<any>({});

    f = (name: string, frm: FormGroup = this.form) => frm.get(name);
    v = (name: string, frm: FormGroup = this.form) => frm.get(name)?.value;
    sv =(name: string, value: any, frm: FormGroup = this.form) => frm.get(name)?.setValue(value);

    isValidForm(f: FormGroup = this.form) {
        f.markAllAsTouched();
        f.updateValueAndValidity();

        return f.valid;
    }

    isValidField(name: string, f: FormGroup = this.form) {
        f.get(name)?.markAsTouched();
        f.get(name)?.updateValueAndValidity();
        return f.get(name)?.valid;
    }

    activeValidations(fields: IValidationByField, f: FormGroup = this.form) {
        const errorMessage$ = new BehaviorSubject<{field: string, message: string}>({field: '', message: ''});

        Object.keys(fields).forEach((key) => {
            const control = f.get(key);
            if (control) {
                control.events
                    .subscribe(event => {
                        if (event instanceof TouchedChangeEvent || event instanceof StatusChangeEvent) {
                            if (control.valid) {
                                errorMessage$.next({field: key, message: ''});
                            } else {
                                fields[key].forEach(err => {
                                    if (control.hasError(err.error)) {
                                        errorMessage$.next({field: key, message: err.message});
                                    }
                                });
                            }
                        }
                    });
            }
        });

        errorMessage$.subscribe((data) => {
            this.errorMessages.update(x => ({ ...x, [data.field]: data.message }));
        });

        return errorMessage$;
    }
    
    openDocument(response: any) {
        const blob = new Blob([response], { type: response.type });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
    }
}