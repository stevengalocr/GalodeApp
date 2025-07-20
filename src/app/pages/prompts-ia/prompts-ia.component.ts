import { Component, Inject, PLATFORM_ID, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { packItems } from '../../data/packItems';


@Component({
  selector: 'app-prompts-ia',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './prompts-ia.component.html',
  styleUrls: ['./prompts-ia.component1.scss', './prompts-ia.component2.scss', './prompts-ia.component3.scss'],
})
export class PromptsIAComponent {
  packItems = packItems;
}

