import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
    })
    export class LanguageService {
    private selectedLanguageSubject = new BehaviorSubject<string>('en');
    selectedLanguage$ = this.selectedLanguageSubject.asObservable();

    constructor() { }

    setSelectedLanguage(language: string) {
        this.selectedLanguageSubject.next(language);
    }
}
