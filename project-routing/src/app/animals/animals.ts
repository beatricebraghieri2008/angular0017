import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ANIMALS } from '../models';

@Component({
  selector: 'app-animals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animals.html',
  styleUrl: './animals.css'
})
export class AnimalsComponent {
  animals = ANIMALS;
}