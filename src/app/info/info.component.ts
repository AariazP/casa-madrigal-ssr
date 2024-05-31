import { Component } from '@angular/core';
import { InfoHabitacionComponent } from '../info-habitacion/info-habitacion.component';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [InfoHabitacionComponent],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

}
