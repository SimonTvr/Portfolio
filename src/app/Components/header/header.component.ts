import { Component } from '@angular/core';
import { LanguageService } from '../../../assets/data/LanguageService';
import { DataService } from '../../../assets/data/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  header: any;

  constructor(private languageService: LanguageService, private dataService: DataService) { }
  
  changeLanguage(event: any) {
    const selectedLanguage = event.target?.value; 
    if (selectedLanguage) {
      this.languageService.setSelectedLanguage(selectedLanguage);
    }
  }
  

  navigateToPage(event: any) {
    const selectedPage = event.target.value;
    this.moveTo(selectedPage); // Fonction pour faire défiler la vue jusqu'à la section correspondante
  }

  moveTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe((result) => {
      console.log('Données récupérées dans le composant :', result);
      this.header = result?.header[0]; 
      console.log('Informations dans le composant :', this.header);
    });
  }
}
