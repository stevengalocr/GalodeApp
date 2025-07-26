import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements AfterViewInit {
  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;
  
  services = [
    {
      title: 'Diseño Visual',
      description: 'Diseño UI/UX enfocado en claridad, conversión y narrativa visual. Desde wireframes hasta sistemas de diseño escalables para productos digitales.',
    },
    {
      title: 'Desarrollo Frontend',
      description: 'Construcción de sitios web y aplicaciones responsivas con Angular, TypeScript, CSS, integración API y rendimiento optimizado.',
    },
    {
      title: 'IA & Automatización',
      description: 'Automatización de flujos creativos y técnicos usando inteligencia artificial, integraciones low-code/no-code y herramientas personalizadas.',
    }
  ];

  ngAfterViewInit(): void {
    if (this.heroVideo?.nativeElement) {
      const video = this.heroVideo.nativeElement;
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Video autoplay failed:', error);
        });
      }
    }
  }

  scrollToPack(): void {
    const packSection = document.getElementById('pack-section');
    if (packSection) {
      packSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
