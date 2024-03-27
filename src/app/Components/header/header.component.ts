import { Component } from '@angular/core';
import { LanguageService } from '../../../assets/data/LanguageService';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../../../assets/data/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  header: any;

  constructor(private languageService: LanguageService, private dataService: DataService, private translate: TranslateService) { }
  
  changeLanguage(event: any) {
    const selectedLanguage = event.target?.value; // Ajoutez une vérification de null
    if (selectedLanguage) {
      this.languageService.setSelectedLanguage(selectedLanguage);
      this.translate.use(selectedLanguage); // Utiliser ngx-translate pour changer la langue
    }
  }

  navigateToPage(event: any) {
    const selectedPage = event.target.value;
    this.moveTo(selectedPage); // Utilisez la fonction moveTo pour faire défiler la vue jusqu'à la section correspondante
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
      this.header = result?.header[0]; // Accédez au premier élément du tableau avec une vérification de null
      console.log('Informations dans le composant :', this.header);
    });
  }
}
