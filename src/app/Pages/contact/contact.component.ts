import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../assets/data/data.service';

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

  constructor(private fb: FormBuilder, private dataService: DataService) {
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

  }
}
