import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailerService {
  constructor(private http: HttpClient) {}

  sendEmail(formData: any): Observable<any> {
    return this.http.post<any>('URL_DE_VOTRE_API_POUR_ENVOYER_UN_EMAIL', formData);
  }
}
