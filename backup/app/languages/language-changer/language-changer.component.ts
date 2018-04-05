import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
import { Language } from '../language';

@Component({
  selector: 'app-language-changer',
  templateUrl: './language-changer.component.html',
  styleUrls: ['./language-changer.component.scss']
})
export class LanguageChangerComponent implements OnInit {

  languageService: LanguageService;

  constructor( languageService: LanguageService ) {
    this.languageService = languageService;
  }

  ngOnInit() {
  }

  public setLanguage(lang: Language) {
    this.languageService.setLanguage(lang);
  }
}
