import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../assets/data/data.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  informations: any;
  isFlipped = false;
  photoPath: string = "assets/images/moi.jpg";

  constructor(private dataService: DataService) {
    
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe((result) => {
      console.log('Données récupérées dans le composant :', result);
      this.informations = result?.informations[0]; // Accédez au premier élément du tableau
      console.log('Informations dans le composant :', this.informations);
    });
  }

  flipPolaroid() {
    console.log('Clic sur le polaroid !');
    this.isFlipped = !this.isFlipped;
  }

}
