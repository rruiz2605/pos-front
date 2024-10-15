import { Component, signal } from '@angular/core';
import { AlertComponent } from '@components/alert/alert.component';
import { ITimeLineItem, TimeLineComponent } from '@components/time-line/time-line.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AlertComponent, TimeLineComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {
  timeLineItems = signal<ITimeLineItem[]>([
    { title: '001', description: '- DATOS GENERALES - POSTALES - DGRAIC', date: 'hace 3 min' },
    { title: '002', description: '- TRAFICO SEGUN RUTA DE ENVIO Y TIPO DE ENVIO - POSTALES - DGRAIC', date: 'hace 1 día' },
    { title: '003', description: '- TRAFICO SEGUN RUTA DE ENVIO Y TIPO DE TRATAMIENTO - POSTALES - DGRAIC', date: '30/09/2024' },
  ]);
}
