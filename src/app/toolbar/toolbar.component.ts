import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NpbModule } from '../npb/npb.module';
import { Observable } from 'rxjs/Observable';

const suggestions = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming', '1234567890', '3219947850.2387474949', 'v32647', 'p38746472', 'Vertrag',
'Police', 'p', 'v', 'c', 'Contract', 'Stiftung', '003412716438', '0012934754.493726262', 'Schaden', 'Leistung', 's', 'l', 'Leistungsfall' ];

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public app = new NpbModule();

  languages = [
    {value: 'en', viewValue: 'english'},
    {value: 'fr', viewValue: 'français'},
    {value: 'de', viewValue: 'deutsch'},
    {value: 'it', viewValue: 'italiano'},
    {value: 'tech', viewValue: 'technical'}
  ];

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 1 ? []
        : suggestions.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))


  constructor(translate: TranslateService) {
    translate.onLangChange.subscribe( v => {
        this.translate( translate );
      } );
  }

  ngOnInit() {
  }

  translate( translate: TranslateService ) {
    this.app.info.title = 'some';

    translate.get('app.info.title').subscribe( v => {
        this.app.info.title = v;
      } );
  }
}
