import { NgModule } from '@angular/core';
import { DataTableComponent, DtActionComponent, DtColumnComponent } from '@components/data-table/data-table.component';

@NgModule({
  declarations: [],
  imports: [
    DataTableComponent,
    DtColumnComponent,
    DtActionComponent
  ],
  exports: [
    DataTableComponent,
    DtColumnComponent,
    DtActionComponent
  ]
})
export class DataTableModule { }
