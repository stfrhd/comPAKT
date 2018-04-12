import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

import { animate, state, style, transition, trigger } from '@angular/animations';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';



export function myAnim2() {
  return trigger(
    'animateState',
    [
      state('false', style( {display: 'none', width: '0%'} )),
      state('true', style({ display: 'inline', width: '100%' })),
      transition('false <=> true', animate('0.2s ease-in-out'))
    ]);
}

export function myAnim3() {
  return trigger(
    'animateVisible',
    [
      state('false', style( {display: 'none'} )),
      state('true', style({ })),
      transition('false <=> true', animate('0.2s ease-in-out'))
    ]
  );
}


export class State {
  constructor(public name: string, public population: string, public flag: string) { }
}

@Component({
  selector: 'prevo-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [myAnim2(), myAnim3()],
})
export class DashboardComponent {


  title = '';

  stateExpression = false;
  searchVisible = false;


  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;

  states: State[] = [
    {
      name: 'Andrea Müller',
      population: '2.978M',
      flag: "Partner VN"
    },
    {
      name: 'Vertrag 112762940',
      population: 'Hans Schneider AG, Basel',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'Vertrag'
    },
    {
      name: 'Stefan Rohde',
      population: '26.2.1976',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'Partner VP'
    },
    {
      name: 'Elisabethenanlange 7, 4056 Basel',
      population: 'Prevo-System-AG',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'Adresse'
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }


  ];

  constructor(titleService: Title, private route: ActivatedRoute, private router: Router,) {
    this.title = titleService.getTitle();
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(s => s ? this.filterStates(s) : this.states.slice())
      );
  }

  filterStates(name: string) {
    return this.states.filter(
      s => {
        let match = (s.name.length >= name.length);
        if (match) {
            match = s.name.toLocaleLowerCase().includes(name.toLocaleLowerCase());
            // match = s.name.toLocaleLowerCase().startsWith(name.toLocaleLowerCase());
        }
        return match;
      }
    );
  }




  toggle() {
    this.stateExpression = !this.stateExpression;
    this.searchVisible = this.stateExpression;
  }

  focusF() {
   // this.toggle();
  }

  focusOutF() {
  //  this.toggle();
  }

  onHover() {
  //  this.toggle();
  }

  search() {
    this.toggle();
  }

  profile(){
    this.router.navigate(['dashboard/profile']);
  }
}
