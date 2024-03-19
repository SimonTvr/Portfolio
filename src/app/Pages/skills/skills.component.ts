import { Component } from '@angular/core';
import { DataService } from '../../../assets/data/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  header: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((result) => {
      console.log('Données récupérées dans le composant :', result);
      this.header = result?.header[0]; // Accédez au premier élément du tableau
      console.log('Informations dans le composant :', this.header);
    });
  }
}
