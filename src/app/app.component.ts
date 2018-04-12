import { LoggerService } from './../play/_services/log.service';
import { AlertService } from './../play/_services/alert.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'prevo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
   // AppGlobals.GOOGLE_CLIENT_ID = '879205880379-8ora5a6dbbqq2knens6uji74cloi013s.apps.googleusercontent.com';
  }

  constructor(translate: TranslateService, private alertService: AlertService, private logger: LoggerService) {
    translate.setDefaultLang('en');
    translate.use('en');
    
    logger.LogMessage.subscribe(
      m => {
        console.log(m);
      }
    );

    // console.log('yeah');
    logger.info('info');
    logger.warn('warn');
    logger.error('error');

    // logger.log('warn', 'two');


    /*this.alertService.getMessage().subscribe(m => {
      console.log(m);

    });
    this.alertService.success('some');*/
  }
}
