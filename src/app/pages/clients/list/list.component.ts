import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseComponent } from '@components/base-component';
import { ListPageComponent } from '@components/list-page/list-page.component';
import { DataTableModule } from '@modules/data-table.module';
import { MaterialModule } from '@modules/material.module';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ListPageComponent, ReactiveFormsModule, MaterialModule, DataTableModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export default class ListComponent extends BaseComponent {
  constructor() {
    super();

    this.form = new FormGroup({
      cellphone: new FormControl(''),
      name: new FormControl(''),
      documentNumber: new FormControl(''),
      status: new FormControl('')
    });
  }

}
