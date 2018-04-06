import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  AuthService,
  GoogleLoginProvider
} from 'angular5-social-login';


const myObserver = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};


@Component({
  selector: 'prevo-feature-1',
  templateUrl: './feature-1.component.html',
  styleUrls: ['./feature-1.component.scss']
})
export class Feature1Component implements OnInit, AfterViewInit {




  name: string;
  state = '';

  constructor(private socialAuthService: AuthService) {
  }

  public signIn() {
    let socialPlatformProvider;
    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(' sign in data : ', userData);
        this.name = userData.name;
      }
    );
  }

  public signOut() {
    this.socialAuthService.signOut();
  }

  public toggle() {

    // this.state = this.socialAuthService.authState['value'] ? 'signedIn' : '';

    if (this.state === '') {
      this.signIn();
    } else {
      this.signOut();
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // this.socialAuthService.authState.forEach( () => {} );
  }
}
