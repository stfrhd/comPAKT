import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../play/languages/language.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'prevo-feature3',
  templateUrl: './feature3.component.html',
  styleUrls: ['./feature3.component.scss']
})
export class Feature3Component implements OnInit {

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  selectedRowIndex = -1;

  highlight(row) {
    this.selectedRowIndex = row.id;
  }

  constructor(translate: TranslateService, lang: LanguageService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  click() {
    console.log('test');
    window.location.href = 'pakt:';
  }
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Dienstaustritt', weight: 1.0079, symbol: 'Hans Mueller'},
  {position: 2, name: 'Gehaltsänderung', weight: 4.0026, symbol: 'Stefan Rohde'},
  {position: 3, name: 'Heirat', weight: 6.941, symbol: 'Boris Becker'},
  {position: 4, name: 'Personendaten', weight: 9.0122, symbol: 'Police 12345'},
  {position: 5, name: 'Anfrage', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Offerte', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Neueintritt', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Meldung', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
