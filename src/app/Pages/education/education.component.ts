import { Component } from '@angular/core';
import { DataService } from '../../../assets/data/data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  currentIndex = 0;
  educationData: any[] = [];
  button: any;
  header: any;

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe((data) => {
      this.educationData = data.education; // Récupérer les données d'éducation du service
      this.button = data?.button[0]; // Récupérer les données du bouton
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

  ngOnInit(): void {
    this.dataService.getData().subscribe((result) => {
      console.log('Données récupérées dans le composant :', result);
      this.header = result?.header[0]; // Accédez au premier élément du tableau
      console.log('Informations dans le composant :', this.header);
    });
  }
}
