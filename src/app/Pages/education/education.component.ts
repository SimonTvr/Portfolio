import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  currentIndex = 0;

  events = [
    'Bac scientifique',
    'DUT Mesures Physiques',
    'CPGE ATS',
    'ENSC'
    // Ajoutez davantage d'événements au besoin
  ];

  showNextEvent() {
    if (this.currentIndex < this.events.length - 1) {
      this.currentIndex++;
    }
  }

  showPreviousEvent() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
