import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pakt',
  templateUrl: './pakt.component.html',
  styleUrls: ['./pakt.component.css']
})
export class PaktComponent implements OnInit {

  title = '';

  constructor() { }

  ngOnInit() {
    let x = 'y';
    let y = x;
    this.some(y);
  }

  some(my:string){
    this.title = my;
  }
}
