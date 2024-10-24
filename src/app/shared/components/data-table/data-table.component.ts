import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, computed, contentChild, contentChildren, effect, input, output, signal, TemplateRef, viewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Constants } from '@models/constants';
import { IActionInfo, IPagingRequest } from '@models/data-table';
import { MaterialModule } from '@modules/material.module';
import { DataTableService } from '@services/data-table.service';

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
  showEmptyMessage = signal<boolean>(true);
  pageable = input<boolean>(true);
  paginationType = input<string>(Constants.PaginationType.SERVER);
  pageSize = input<number>(10);
  apiUrl = input<string>('');
  dataQuery = input<any>({});
  data = input<any[]>([]);
  dataSource = new MatTableDataSource<any>([]);
  paginator = viewChild(MatPaginator);
  
  columns = contentChildren(DtColumnComponent);
  buttons = contentChildren(DtActionComponent);
  displayedColumns = computed(() => {
    let titles = this.columns().map(column => column.field());
    if (this.buttons().length > 0) {
      titles.push('actions');
    }
    return titles;
  });

  constructor(private service: DataTableService) { 
    effect(() => {
      this.dataSource.data = this.data();
    });

    effect(() => {
      if (this.apiUrl() && this.dataQuery()) {
        this.reloadTable(0);
      }
    });

    effect(() => {
      this.dataSource.paginator = this.paginator()!;
    });
  }

  reloadTable(pageIndex: number) {
    const paging: IPagingRequest = { page: pageIndex, pageSize: this.paginator()?.pageSize};
    this.service.getData(this.apiUrl(), this.dataQuery(), paging)
      .subscribe(response => {
        this.dataSource = new MatTableDataSource<any>(response!.content);
        this.paginator()!.length = response!.total || 0;
        this.showEmptyMessage.set(!response?.content?.length);
      });
  }

  changePageEvent(e: PageEvent) {
    if (this.paginationType() === Constants.PaginationType.SERVER && this.apiUrl()) {
      this.reloadTable(e.pageIndex);
    }
  }
}
