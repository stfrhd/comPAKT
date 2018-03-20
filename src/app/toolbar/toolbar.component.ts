import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NpbModule } from '../npb/npb.module';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {


  languages = [
    {value: 'en', viewValue: 'english'},
    {value: 'fr', viewValue: 'français'},
    {value: 'de', viewValue: 'deutsch'},
    {value: 'it', viewValue: 'italiano'},
    {value: 'tech', viewValue: 'technical'}
  ];

  public app = new NpbModule();

  constructor(translate: TranslateService) {
    translate.onLangChange.subscribe( v => {
        this.translate( translate );
      } );
  }

  ngOnInit() {
  }

  translate( translate: TranslateService ) {
    translate.get('app.info.title').subscribe( v => {
        this.app.info.title = v;
      } );
  }
}
