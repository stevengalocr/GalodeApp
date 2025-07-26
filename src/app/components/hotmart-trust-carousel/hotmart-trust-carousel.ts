import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { HOTMART_TRUST_REASONS, HotmartTrustReason } from '../../data/hotmart-trust-carousel.data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hotmart-trust-carousel',
  templateUrl: './hotmart-trust-carousel.html',
  styleUrls: ['./hotmart-trust-carousel.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class HotmartTrustCarouselComponent {
  reasons = HOTMART_TRUST_REASONS;
}