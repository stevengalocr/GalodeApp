import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/prompts-ia/prompts-ia.component').then(m => m.PromptsIAComponent)
  }
];
