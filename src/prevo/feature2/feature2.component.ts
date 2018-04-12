import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../play/languages/language.service';

@Component({
  selector: 'prevo-feature2',
  templateUrl: './feature2.component.html',
  styleUrls: ['./feature2.component.scss']
})
export class Feature2Component implements OnInit {

  constructor(translate: TranslateService, public lang: LanguageService) { }

  ngOnInit() {
  }
}
