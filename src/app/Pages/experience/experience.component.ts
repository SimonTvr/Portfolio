import { Component } from '@angular/core';
import { DataService } from '../../../assets/data/data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  projects: any;

  constructor(private dataService: DataService) {
    
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe((result) => {
      console.log('Données récupérées dans le composant :', result);
      this.projects = result?.projects[0]; // Accédez au premier élément du tableau
      console.log('Informations dans le composant :', this.projects);
    });
  }

}
