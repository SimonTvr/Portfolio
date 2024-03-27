import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './../../assets/data/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://localhost:7103/swagger/index.html';

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl);
  }

  getContact(id: number): Observable<Contact> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Contact>(url);
  }

  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl, contact);
  }

  updateContact(id: number, contact: Contact): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, contact);
  }

  deleteContact(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  sendEmail(contact: Contact): Observable<any> {
    const url = `${this.apiUrl}/api/contact/send-email`;
    return this.http.post<any>(url, contact);
  }
}
