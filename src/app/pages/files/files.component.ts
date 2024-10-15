import { Component, OnInit, signal } from '@angular/core';
import { FormControlModule } from '@modules/form-control.module';
import { IPeriod } from './files';
import { DataTableModule } from '@modules/data-table.module';
import { IActionInfo } from '@models/data-table';
import { AlertComponent } from '@components/alert/alert.component';
import { CommonModule } from '@angular/common';
import { ICodeValue } from '@models/general';
import { FromListPipe } from '@pipes/from-list.pipe';

@Component({
  selector: 'app-files',
  standalone: true,
  imports: [FormControlModule, DataTableModule, AlertComponent, CommonModule, FromListPipe],
  templateUrl: './files.component.html',
  styleUrl: './files.component.scss'
})
export default class FilesComponent implements OnInit {
  periods = signal<IPeriod[]>([]);
  loadedFiles = signal<any[]>([]);
  statusList = signal<ICodeValue[]>([]);

  constructor() {}

  ngOnInit() {
    const periods:IPeriod [] = [];

    for(let i = new Date().getFullYear(); i >= 2018; i--) {
      // periods.push({ code: '', year: i, period: '' });
      periods.push({ code: `${i}SII`, year: i, period: 'II' });
      periods.push({ code: `${i}SI`, year: i, period: 'I' });
    }

    this.periods.set(periods);

    //
    this.statusList.set([
      { code: 'P', value: 'Pendiente de Procesamiento' },
      { code: 'O', value: 'Observado' },
      { code: 'CV', value: 'Contenido Validado' },
      { code: 'VF', value: 'Validación Finalizada' },
      { code: 'VV', value: 'Vinculación Validada' }
    ]);
    
    //
    this.loadedFiles.set([
      { id: 1, fileName: '001 - DATOS GENERALES - POSTALES - DGRAIC.XLSX', status: 'VV', size: '1 Kb' },
      { id: 2, fileName: '002 - TRAFICO SEGUN RUTA DE ENVIO Y TIPO DE ENVIO - POSTALES - DGRAIC.XLSX', status: 'P', size: '2 Kb' },
      { id: 3, fileName: '003 - TRAFICO SEGUN RUTA DE ENVIO Y TIPO DE TRATAMIENTO - POSTALES - DGRAIC.XLSX', status: 'CV', size: '3 Kb' },
      { id: 4, fileName: '004 - TRAFICO SEGUN RUTA DE ENVIO Y TIPO DE CLIENTE REMITENTE - POSTALES - DGRAIC.XLSX', status: 'O', size: '4 Kb' },
      { id: 5, fileName: '005 - TRAFICO SEGUN RUTA DE ENVIO Y CONDICION DE DISTRIBUCION - POSTALES - DGRAIC.XLSX', status: 'VF', size: '5 Kb' },
      { id: 6, fileName: '006 - TRAFICO SEGUN RUTA DE ENVIO Y TIEMPOS DE ENTREGA - POSTALES - DGRAIC.XLSX', status: 'P', size: '6 Kb' },
      { id: 7, fileName: '007 - TRAFICO DE ORIGEN NACIONAL Y DESTINO NACIONAL SEGUN REGIONES - POSTALES - DGRAIC.XLSX', status: 'P', size: '7 Kb' },
      { id: 8, fileName: '008 - TRAFICO DE ORIGEN NACIONAL Y DESTINO INTERNACIONAL SEGUN PAISES - POSTALES - DGRAIC.XLSX', status: 'P', size: '8 Kb' },
      { id: 9, fileName: '009 - TRAFICO DE ORIGEN INTERNACIONAL Y DESTINO NACIONAL SEGUN PAISES - POSTALES - DGRAIC.XLSX', status: 'P', size: '9 Kb' },
      { id: 10, fileName: '010 - INGRESOS BRUTOS SEGUN RUTA DE ENVIO Y TIPO DE ENVIO - POSTALES - DGRAIC.XLSX', status: 'P', size: '10 Kb' },
      { id: 11, fileName: '011 - INGRESOS BRUTOS SEGUN RUTA DE ENVIO Y TIPO DE TRATAMIENTO - POSTALES - DGRAIC.XLSX', status: 'P', size: '11 Kb' },
      { id: 12, fileName: '012 - INGRESOS BRUTOS SEGUN RUTA DE ENVIO Y TIPO DE CLIENTE REMITENTE - POSTALES - DGRAIC.XLSX', status: 'P', size: '12 Kb' },
      { id: 13, fileName: '013 - REMESA Y GIRO POSTAL SEGUN RUTA DE ENVIO - POSTALES - DGRAIC.XLSX', status: 'P', size: '13 Kb' },
      { id: 14, fileName: '014 - REMESA Y GIRO POSTAL SEGUN RUTA DE ENVIO Y MONTO DE ENVIO - POSTALES - DGRAIC.XLSX', status: 'P', size: '14 Kb' },
      { id: 15, fileName: '015 - REMESA Y GIRO POSTAL DE ORIGEN NACIONAL Y DESTINO NACIONAL SEGUN REGIONES - POSTALES - DGRAIC.XLSX', status: 'P', size: '15 Kb' },
      { id: 16, fileName: '016 - REMESA Y GIRO POSTAL DE ORIGEN NACIONAL Y DESTINO INTERNACIONAL SEGUN PAISES - POSTALES - DGRAIC.XLSX', status: 'P', size: '16 Kb' },
      { id: 17, fileName: '017 - REMESA Y GIRO POSTAL DE ORIGEN INTERNACIONAL Y DESTINO NACIONAL SEGUN PAISES - POSTALES - DGRAIC.XLSX', status: 'P', size: '17 Kb' },
      { id: 18, fileName: '018 - ENVIOS RECIBIDOS POR SUBCONTRATACION SEGUN TIPO DE ENVIO - POSTALES - DGRAIC.XLSX', status: 'P', size: '18 Kb' },
      { id: 19, fileName: '019 - INGRESOS BRUTOS RECIBIDOS POR SUBCONTRATACION SEGUN TIPO DE ENVIO - POSTALES - DGRAIC.XLSX', status: 'P', size: '19 Kb' },
      { id: 20, fileName: '020 - REMESA Y GIRO POSTAL RECIBIDO POR SUBCONTRATACION - POSTALES - DGRAIC.XLSX', status: 'P', size: '20 Kb' },
      { id: 21, fileName: '021 - ENVIOS ENTREGADOS A CONCESIONARIOS POSTALES SUBCONTRATADOS - POSTALES - DGRAIC.XLSX', status: 'P', size: '21 Kb' },
      { id: 22, fileName: '022 - MODALIDAD DE TRANSPORTE SEGUN RUTA DE ENVIO - POSTALES - DGRAIC.XLSX', status: 'P', size: '22 Kb' },
      { id: 23, fileName: '023 - PRINCIPALES CLIENTES CORPORATIVOS - POSTALES - DGRAIC.XLSX', status: 'P', size: '23 Kb' },
      { id: 24, fileName: '024 - PERSONAL TOTAL SEGUN TIPO DE ACTIVIDAD - POSTALES - DGRAIC.XLSX', status: 'P', size: '24 Kb' },
      { id: 25, fileName: '025 - PERSONAL ACTIVIDAD POSTAL SEGUN TIPO DE EMPLEO - POSTALES - DGRAIC.XLSX', status: 'P', size: '25 Kb' },
      { id: 26, fileName: '026 - ATENCION DE RECLAMOS - POSTALES - DGRAIC.XLSX', status: 'P', size: '26 Kb' },
      { id: 27, fileName: '027 - PUNTOS DE ATENCION POSTAL - POSTALES - DGRAIC.XLSX', status: 'P', size: '27 Kb' },
    ]);
  }

  download($event: IActionInfo) {
  }
}
