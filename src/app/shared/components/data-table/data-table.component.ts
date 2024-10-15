import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, computed, contentChild, contentChildren, input, output, TemplateRef } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Constants } from '@models/constants';
import { IActionInfo } from '@models/data-table';
import { MaterialModule } from '@modules/material.module';

@Component({
  selector: 'dt-column',
  standalone: true,
  imports: [],
  template: ''
})
export class DtColumnComponent {
  title = input.required<string>();
  field = input.required<string>();
  class = input<string>();
  template = contentChild(TemplateRef<any>);
  transform = input<(value: any, index: number, row: any) => any>();
}

@Component({
  selector: 'dt-action',
  standalone: true,
  imports: [],
  template: ''
})
export class DtActionComponent {
  icon = input.required<string>();
  tooltip = input<string>();
  showWhen = input<(row: any) => boolean>();
  action = output<IActionInfo>();
}

@Component({
  selector: 'data-table',
  standalone: true,
  imports: [CommonModule, NgTemplateOutlet, MaterialModule, MatTableModule, MatPaginatorModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent {
  ngClass = input<string>('');
  centerButtons = input<boolean>(true);
  emptyMessage = input<string>('No se encontraron registros');
  pageable = input<boolean>(true);
  paginationType = input<string>(Constants.PaginationType.SERVER);
  pageSize = input<number>(10);
  apiUrl = input<string>('');
  dataQuery = input<any>({});
  data = input<any[]>([]);
  dataSource = new MatTableDataSource<any>([]);
  
  columns = contentChildren(DtColumnComponent);
  buttons = contentChildren(DtActionComponent);
  displayedColumns = computed(() => {
    let titles = this.columns().map(column => column.field());
    if (this.buttons().length > 0) {
      titles.push('actions');
    }
    return titles;
  });

  changePageEvent(e: PageEvent) {
    if (this.paginationType() === Constants.PaginationType.SERVER && this.apiUrl()) {
      // this.reloadTable(e.pageIndex);
    }
  }
}
