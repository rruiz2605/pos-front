import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { environment } from "@env/environment";
import { Observable } from "rxjs";

export class BaseService {
  httpCliente = inject(HttpClient);
  
  apiBase: string = environment.apiUrl;
  controller: string = '';
  listMethod: string = 'List';
  paginatedListMethod: string = 'PaginatedList';

  get apiUrl(): string {
    return `${this.apiBase}/${this.controller}`;
  }

  get listApiUrl(): string {
    return !this.listMethod ? this.apiUrl : `${this.apiUrl}/${this.listMethod}`;
  }

  get paginatedListApiUrl(): string {
    return !this.paginatedListMethod ? this.apiUrl : `${this.apiUrl}/${this.paginatedListMethod}`;
  }

  get<T>(url: string): Observable<T> {
    return this.httpCliente.get<T>(url);
  }

  post<T>(url: string, body: any): Observable<T> {
    return this.httpCliente.post<T>(url, body);
  }
}
