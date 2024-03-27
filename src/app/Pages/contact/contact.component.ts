import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../assets/data/data.service';
import { ContactService } from '../../../assets/data/contact.service';
import { HttpClient } from '@angular/common/http'; 
import { Contact } from '../../../assets/data/contact.model';

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

  constructor(
    private fb: FormBuilder, 
    private dataService: DataService,
    private contactService: ContactService,
    private http: HttpClient
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }
  

  ngOnInit(): void {
    this.dataService.getData().subscribe((result) => {
      console.log('Données récupérées dans le composant :', result);
      this.header = result?.header[0];
      console.log('Informations dans le composant :', this.header);
    });

    this.dataService.getData().subscribe((result) => {
      console.log('Données récupérées dans le composant :', result);
      this.contact = result?.contact[0];
      console.log('Informations dans le composant :', this.contact);
    });

    this.dataService.getData().subscribe((result) => {
      console.log('Données récupérées dans le composant :', result);
      this.informations = result?.informations[0];
      console.log('Informations dans le composant :', this.informations);
    });
  }

  submitForm(): void {
    if (this.contactForm.valid) {
      // Envoi de la requête HTTP uniquement si le formulaire est valide
      this.http.post<any>('https://localhost:7103/api/contact/send-email', this.contactForm.value).subscribe({
        next: (response) => {
          console.log(response); // Affiche la réponse de l'API dans la console
          if (response && response.message === 'Email sent successfully') {
            console.log('L\'e-mail a été envoyé avec succès !');
            this.emailSent = true; // Marquer l'e-mail comme envoyé avec succès
          } else {
            console.error('Réponse de l\'API invalide.');
          }
        },
        error: (error) => {
          console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
        }
      });
    }
  }  
}