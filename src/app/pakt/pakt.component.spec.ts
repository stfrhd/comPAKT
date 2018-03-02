/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaktComponent } from './pakt.component';

describe('PaktComponent', () => {
  let component: PaktComponent;
  let fixture: ComponentFixture<PaktComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaktComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
