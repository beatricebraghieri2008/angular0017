import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FRUITS } from '../models';

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fruits.html',
  styleUrl: './fruits.css'
})
export class FruitsComponent {
  fruits = FRUITS;
}