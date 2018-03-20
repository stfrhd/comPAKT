import { Component, OnInit, TRANSLATIONS_FORMAT } from '@angular/core';
import { NpbModule } from '../npb/npb.module';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public params = { anotherTitle: 'otherParams' };

  app = new NpbModule();
  currentLang: any;

  constructor(translate: TranslateService) {
    translate.onLangChange.subscribe( v => this.translate(translate) );

    this.currentLang = translate.currentLang;

  }

  ngOnInit() {
    this.app.info.fullTitle = 'itzz a megablast';

    // this.translator.get('app').subscribe( v => this.app = v );



    // this.translator.get('app.info.fullTitle').subscribe( v => this.app.info.fullTitle = v );
  }

  translate( translate: TranslateService ) {
    translate.get('app.info.fullTitle').subscribe( v => this.app.info.fullTitle = v );
  }
}
