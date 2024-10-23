import { Injectable } from '@angular/core';
import { MaintenanceService } from '@services/maintenance.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends MaintenanceService<any> {

  constructor() { 
    super();

    this.controller = 'Client';
  }
}
