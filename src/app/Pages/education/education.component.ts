// education.component.ts

import { Component } from '@angular/core';
import { DataService } from '../../../assets/data/data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  currentIndex = 0;
  educationData: any[] = []; // Stock des données d'éducation
  photoPath: string = "assets/images/moi.jpg";


  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe((data) => {
      this.educationData = data.education; // Récupérer les données d'éducation du service
    });
  }

  showNextEvent() {
    if (this.currentIndex < this.educationData.length - 1) {
      this.currentIndex++;
    }
  }

  showPreviousEvent() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
