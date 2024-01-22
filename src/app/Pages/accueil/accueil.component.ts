import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {

  goToPart(id:number) {
    let a = document.getElementById(id.toString());
    console.log(a);
    a?.scrollIntoView({behavior: 'smooth', block: 'center'});
  }
}
