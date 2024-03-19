import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { LanguageService } from './LanguageService';

@Injectable({
    providedIn: 'root'
    })
    export class DataService {

    constructor(private http: HttpClient, private languageService: LanguageService) { }

    getData(): Observable<any> {
        return this.languageService.selectedLanguage$.pipe(
        switchMap(language => this.http.get<any>(`assets/data/data${language.toUpperCase()}.json`))
        );
    }
}
