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
  
  changeLanguage(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedLanguage = target.value;
    this.languageService.setSelectedLanguage(selectedLanguage);
    this.translate.use(selectedLanguage); // Utiliser ngx-translate pour changer la langue
  }

  moveTo(id: string) {
    let a = document.getElementById(id.toString());
    console.log(a);
    a?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }


ngOnInit(): void {
  this.dataService.getData().subscribe((result) => {
    console.log('Données récupérées dans le composant :', result);
    this.header = result?.header[0]; // Accédez au premier élément du tableau
    console.log('Informations dans le composant :', this.header);
  });
}
}
