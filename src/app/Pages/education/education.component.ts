import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  currentIndex = 0;

  events = [
    'Bac scientifique Lycée Banville',
    'DUT Mesures Physiques',
    'Contenu de l\'événement 3 pour l\'éducation',
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
