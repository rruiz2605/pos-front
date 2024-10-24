import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { IPagingRequest } from '@models/data-table';
import { IPaginatedList } from '@models/general';

@Injectable({
  providedIn: 'root'
})
export class DataTableService extends BaseService {

  getData<T>(urlApi: string, dataQuery: any, pageQuery: IPagingRequest) {
    dataQuery.page = pageQuery.page;
    dataQuery.pageSize = pageQuery.pageSize;
    return this.post<IPaginatedList<T>>(urlApi, dataQuery);
  }
}
