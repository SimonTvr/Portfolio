import { Component } from '@angular/core';
import { DataService } from '../../../assets/data/data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  projects: any[] = []; 
  header: any;
  button: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((result) => {
      console.log('Données récupérées dans le composant :', result);
      this.projects = result?.projects; 
      console.log('Informations dans le composant :', this.projects);
     // Propriété showDescription à chaque projet pour gérer l'affichage de la description
      this.projects.forEach(project => {
        project.showDescription = false;
        project.buttonLabel = result?.button[0].ShowMore; 
      });
    });

    this.dataService.getData().subscribe((result) => {
      console.log('Données récupérées dans le composant :', result);
      this.header = result?.header[0]; 
      console.log('Informations dans le composant :', this.header);
    });

    this.dataService.getData().subscribe((result) => {
      console.log('Données récupérées dans le composant :', result);
      this.button = result?.button[0]; 
      console.log('Informations dans le composant :', this.button);
    });
  }

  toggleDescription(project: any) {
    project.showDescription = !project.showDescription;
    project.buttonLabel = project.showDescription ? this.button.ShowLess : this.button.ShowMore;
  }
}
