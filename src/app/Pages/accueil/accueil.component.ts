import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  flashEffect() {
    const flashOverlay = document.querySelector('.flash-overlay');
    if (flashOverlay) {
      flashOverlay.classList.add('flash-effect');
      setTimeout(() => {
        flashOverlay.classList.remove('flash-effect');
        this.moveTo('about-me'); // Appel de la fonction pour faire défiler vers la section "about-me"
      }, 300);
    }
  }

  moveTo(id: string) {
    let a = document.getElementById(id.toString());
    a?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
