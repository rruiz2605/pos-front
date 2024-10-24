import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService<T> extends BaseService {
  getByIdMethod: string = 'GetById';
  createMethod: string = 'Create';
  updateMethod: string = 'Update';
  deleteMethod: string = 'Delete';

  getById(id: number) {
    return this.get<T>(`${this.apiUrl}/${this.getByIdMethod}/${id}`);
  }

  getAll(filter?: any) {
    let queryString = '';
    if (filter) {
      Object.keys(filter).forEach(key => {
        queryString += `${key}=${filter[key]}&`;
      });
      
    }

    return this.get<T[]>(`${this.apiUrl}/${this.listMethod}`);
  }

  create(data: T) {
    return this.post<T>(`${this.apiUrl}/${this.createMethod}`, data);
  }

  update(data: T) {
    return this.post<T>(`${this.apiUrl}/${this.updateMethod}`, data);
  }

  delete(id: number) {
    return this.get<boolean>(`${this.apiUrl}/${this.deleteMethod}/${id}`);
  }
}
