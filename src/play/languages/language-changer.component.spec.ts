import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageChangerComponent } from './language-changer.component';

describe('LanguageChangerComponent', () => {
  let component: LanguageChangerComponent;
  let fixture: ComponentFixture<LanguageChangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageChangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
