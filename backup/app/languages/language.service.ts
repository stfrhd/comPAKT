import { SupportedLanguages } from './supported-languages';
import { Injectable } from '@angular/core';
import { Language } from './language';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class LanguageService {

  private supportedLanguages = new SupportedLanguages();
  private language: Language = SupportedLanguages.ENGLISH;
  private translate: TranslateService;

  constructor(translate: TranslateService) {
    this.translate = translate;
    this.translate.setDefaultLang( this.language.value );
  }

  setLanguage(language: Language) {
    this.language = language;
    this.translate.use( this.language.value );
  }

  getLanguage(): Language {
    return this.language;
  }

  getLanguages() {
    return this.supportedLanguages;
  }
}
