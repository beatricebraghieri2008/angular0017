import { Routes } from '@angular/router';
import { AnimalsComponent } from './animals/animals';
import { FruitsComponent } from './fruits/fruits';
import { GenericComponent } from './generic/generic';

export const routes: Routes = [
  { path: 'animals', component: AnimalsComponent },
  { path: 'fruits', component: FruitsComponent },
  { path: 'generic/:id', component: GenericComponent },
  { path: '', redirectTo: '/animals', pathMatch: 'full' }
];