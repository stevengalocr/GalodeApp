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
export class HotmartTrustCarouselComponent implements AfterViewInit, OnDestroy {
  private autoAdvanceInterval: any;
  reasons = HOTMART_TRUST_REASONS;
  current = 0;
  @ViewChild('carouselList', { static: false }) carouselList!: ElementRef<HTMLUListElement>;

  ngAfterViewInit() {
    // Animación continua, compatible iOS
    this.autoAdvanceInterval = setInterval(() => {
      if (!this.carouselList || !this.carouselList.nativeElement) return;
      const el = this.carouselList.nativeElement;
      el.scrollLeft += 1;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
        el.scrollLeft = 0;
      }
    }, 20);
  }

  ngOnDestroy() {
    if (this.autoAdvanceInterval) {
      clearInterval(this.autoAdvanceInterval);
    }
  }

  scrollToCurrent() {
    if (!this.carouselList) return;
    const el = this.carouselList.nativeElement;
    const itemWidth = el.querySelector('.carousel-item')?.clientWidth || 0;
    try {
  el.scroll({ left: this.current * itemWidth, behavior: 'smooth' });
} catch {
  el.scrollLeft = this.current * itemWidth;
}
  }


}