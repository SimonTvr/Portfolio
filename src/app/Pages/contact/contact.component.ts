import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../assets/data/data.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  header: any;
  contact: any;
  informations: any;
  contactForm: FormGroup;
  emailSent: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private dataService: DataService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }
  

  ngOnInit(): void {
    this.dataService.getData().subscribe((result) => {
      console.log('Données récupérées dans le composant :', result);
      this.header = result?.header[0]; // Accédez au premier élément du tableau
      console.log('Informations dans le composant :', this.header);
    });

    this.dataService.getData().subscribe((result) => {
      console.log('Données récupérées dans le composant :', result);
      this.contact = result?.contact[0]; // Accédez au premier élément du tableau
      console.log('Informations dans le composant :', this.contact);
    });

    this.dataService.getData().subscribe((result) => {
      console.log('Données récupérées dans le composant :', result);
      this.informations = result?.informations[0]; // Accédez au premier élément du tableau
      console.log('Informations dans le composant :', this.informations);
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      // Vérifier si this.contactForm est null ou undefined
      if (this.contactForm) {
        // Construire l'objet à envoyer
        const formData = {
          name: this.contactForm.get('name')?.value, // Ajouter '?.' pour accéder aux propriétés en toute sécurité
          email: this.contactForm.get('email')?.value,
          message: this.contactForm.get('message')?.value
        };
  

        const headers = new HttpHeaders({
          'Content-Type': 'application/json'
        });
        
        // Envoyer les données du formulaire à l'API
        this.http.post<any>('https://localhost:7103/api/contact/send-email', formData).subscribe(
          (response) => {
            console.log('E-mail envoyé avec succès !', response);
            // Réinitialiser le formulaire
            this.contactForm.reset();
            // Marquer l'envoi d'e-mail comme réussi
            this.emailSent = true;
          },
          (error) => {
            console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
            // Afficher un message d'erreur à l'utilisateur
          }
        );
      } else {
        console.error('Le formulaire de contact n\'est pas encore initialisé.');
      }
    } else {
      // Si le formulaire est invalide, afficher un message d'erreur à l'utilisateur
    }
  }
  
  
}
