import { Component, Inject, PLATFORM_ID, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { SpecialOfferComponent } from '../../components/special-offer/special-offer.component';
import { packItems } from '../../data/packItems';
import { benefitsItems } from '../../data/benefitsItems';


@Component({
  selector: 'app-prompts-ia',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SpecialOfferComponent],
  templateUrl: './prompts-ia.component.html',
  styleUrls: ['./prompts-ia.component1.scss', './prompts-ia.component2.scss', './prompts-ia.component3.scss'],
})
export class PromptsIAComponent implements OnInit, OnDestroy {
  packItems = packItems;

  packItemsList1 = this.shufflePackItems();
  packItemsList2 = this.shufflePackItems();


  // Devuelve una copia desordenada de packItems
  shufflePackItems() {
    const array = [...packItems];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


  currentIndex = 0;

  // BENEFITS CAROUSEL
  benefits = benefitsItems;
  benefitIndex = 0;
  private benefitInterval: any;

  // Variables para swipe táctil
  private touchStartX: number = 0;
  private touchEndX: number = 0;

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  private handleSwipe() {
    const deltaX = this.touchEndX - this.touchStartX;
    const threshold = 40; // Sensibilidad mínima para swipe
    if (deltaX > threshold) {
      this.prevBenefit();
    } else if (deltaX < -threshold) {
      this.nextBenefit();
    }
  }

  getTransform() {
    // Centra la card activa, muestra peek a los lados
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  getBenefitTransform() {
    return `translateX(-${this.benefitIndex * 100}%)`;
  }

  nextBenefit() {
    if (this.benefitIndex < this.benefits.length - 1) {
      this.benefitIndex++;
    }
  }

  prevBenefit() {
    if (this.benefitIndex > 0) {
      this.benefitIndex--;
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.benefitInterval) {
      clearInterval(this.benefitInterval);
    }
  }

  nextBenefitAuto() {
    this.benefitIndex = (this.benefitIndex + 1) % this.benefits.length;
  }

  scrollToPack() {
    const el = document.getElementById('pack-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}




