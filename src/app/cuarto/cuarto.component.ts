import { Component, Input } from '@angular/core';
import { CuartoDTO } from '../DTO/cuartoDTO';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-cuarto',
  standalone: true,
  imports: [ CommonModule, NgOptimizedImage],
  templateUrl: './cuarto.component.html',
  styleUrl: './cuarto.component.css'
})
export class CuartoComponent {
  @Input() cuarto!: CuartoDTO;

  constructor(){
    
  }

  verOpciones() {
    window.open("https://wa.link/jtln9x", '_blank');
  }

}
