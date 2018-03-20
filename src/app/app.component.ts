import { AppInfoModule } from './app-info/app-info.module';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToolbarComponent } from './toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NPB';

  param = {value: 'world'};

  public params = { anotherTitle: 'comPAKT' };

  appInfo: AppInfoModule;

  constructor(translate: TranslateService) {
      translate.addLangs(['en', 'fr', 'de', 'it', 'tech' ]);

    // this language will be used as a fallback when a translation isn't found in the current language
      // translate.setDefaultLang('tech');

       // the lang to use, if the lang isn't available, it will use the current loader to get them
      // translate.use('en');

      translate.get('app.info').subscribe( v => this.appInfo = v );
  }
}
