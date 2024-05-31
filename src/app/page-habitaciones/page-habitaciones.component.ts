import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HeadComponent } from "../head/head.component";
import { ContactenosComponent } from "../contactenos/contactenos.component";
import { CuartoComponent } from "../cuarto/cuarto.component";
import { HabitacionDTO } from '../DTO/habitacionDTO';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Component({
    selector: 'app-page-habitaciones',
    standalone: true,
    templateUrl: './page-habitaciones.component.html',
    styleUrl: './page-habitaciones.component.css',
    imports: [NgOptimizedImage, CommonModule, HeadComponent, ContactenosComponent, CuartoComponent]
})
export class PageHabitacionesComponent {
  
  listaHabitaciones: HabitacionDTO[];

  constructor(private http: HttpClient) {
      this.listaHabitaciones = [];
   }

  ngOnInit(): void {
    this.cargarHabitaciones().then((data) => {
      //imprimo los datos comoo JSON
      data.forEach((element: any[]) => {
          element.forEach(habitacion => {
              this.listaHabitaciones.push(habitacion);
          });
          
      }
      );
      
    });
  }

  async cargarHabitaciones(): Promise<Observable<HabitacionDTO[]>> {
    return await this.http.get<HabitacionDTO[]>('/cuartos/habitaciones.json');
  }


}
