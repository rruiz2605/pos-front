import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BaseComponent } from '@components/base-component';
import { ListPageComponent } from '@components/list-page/list-page.component';
import { DataTableModule } from '@modules/data-table.module';
import { MaterialModule } from '@modules/material.module';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ListPageComponent, ReactiveFormsModule, MaterialModule, DataTableModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export default class ListComponent extends BaseComponent {
  readonly apiListUrl: string;
  dataQuery = signal<any>({});

  constructor(private clientService: ClientService) {
    super();

    this.apiListUrl = this.clientService.paginatedListApiUrl;

    this.form = new FormGroup({
      cellphone: new FormControl(''),
      name: new FormControl(''),
      documentNumber: new FormControl(''),
      status: new FormControl('')
    });
  }

  search() {
    this.dataQuery.set({
      fullName: this.v('name'),
      cellphoneNumber: this.v('cellphone')
    });
  }

  clearFilters() {
    this.form.reset();
    this.search();
  }
}
