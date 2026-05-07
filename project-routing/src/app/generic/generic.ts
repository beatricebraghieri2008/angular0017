import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Emoji, FRUITS, ANIMALS } from '../models';

@Component({
  selector: 'app-generic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generic.html',
  styleUrl: './generic.css'
})
export class GenericComponent {
  genVect: Emoji[] = [];

  constructor(private route: ActivatedRoute) {
    // Ci iscriviamo ai cambiamenti dell'URL
    this.route.paramMap.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) => {
    let uri_param = params.get('id'); // Prendiamo il parametro :id dall'URL
    
    if (uri_param === 'fruits') {
      this.genVect = FRUITS;
    } else if (uri_param === 'animals') {
      this.genVect = ANIMALS;
    }
  }
}