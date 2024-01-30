import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pdf',
  template: `
    <div class="carousel">
      <div *ngFor="let project of projects" class="carousel-item">
        <img [src]="project.imageUrl" (click)="openPdf(project.pdfUrl)" />
      </div>
    </div>
  `,
  styles: [
    `
      .carousel {
        display: flex;
        overflow: hidden;
      }

      .carousel-item {
        flex: 0 0 auto;
        width: 100%;
        transition: transform 0.5s ease;
      }
    `,
  ],
})
export class Pdf {
  @Input() projects: any[] = [];

  currentIndex: number = 0;

  openPdf(pdfUrl: string) {
    // Implémentez la logique pour ouvrir le PDF ici
    console.log('Ouvrir le PDF :', pdfUrl);
  }
}
