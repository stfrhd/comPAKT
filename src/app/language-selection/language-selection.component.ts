import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selection',
  templateUrl: './language-selection.component.html',
  styleUrls: ['./language-selection.component.css']
})
export class LanguageSelectionComponent implements OnInit {

  public lang = 'lang';
  translate: TranslateService;

  constructor( translate: TranslateService ) {
    this.translate = translate;
  }

  ngOnInit() {
  }

  langSelected(lang: string) {
    this.lang = lang;
    this.translate.use( lang );
  }
}
