import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-prompts-ia',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './prompts-ia.component.html',
  styleUrls: ['./prompts-ia.component.scss']
})
export class PromptsIAComponent {}
