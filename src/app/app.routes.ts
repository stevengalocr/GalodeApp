import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/main/main.component').then(m => m.MainComponent)
  },
  {
    path: 'prompts',
    loadComponent: () => import('./pages/prompts-ia/prompts-ia.component').then(m => m.PromptsIAComponent)
  }
];
