import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css'
})
export class CarrouselComponent {

}
