import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  moveTo(id:string) {
    let a = document.getElementById(id.toString());
    console.log(a);
    a?.scrollIntoView({behavior: 'smooth', block: 'center'});
  }

  /* constructor(private router: Router) {}

  Flash() {
    const section = document.querySelector('.camera-flash-section');
    if (section) {
      section.classList.add('cameraFlash');
    }
    // Navigue vers la route "/about-me"
    this.router.navigate(['/about-me']);
  }
  */
}

