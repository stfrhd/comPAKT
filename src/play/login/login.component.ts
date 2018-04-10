import { UserService } from './../_services/user.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService, AlertService } from '../_services';
import { User } from '../_models';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, ErrorStateMatcher } from '@angular/material';

import { ProgOverlayService } from '../overlay/progOverlay.service';

import { ProgOverlayRef } from '../overlay/progOverlay-ref';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { AuthService } from 'angular5-social-login';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'prevo-dialog',
  templateUrl: 'dialog.component.html',
})
export class DialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}


@Component({
  selector: 'prevo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  matcher = new MyErrorStateMatcher();

  ctrl = new FormControl('',
    [ Validators.required, Validators.email ]
  );

  model = {
    username: 'test',
    password: 'test'
  };

  load = false;
  private _loading: Subject<Boolean> = new Subject<Boolean>();
  get observeLoading(): Observable<Boolean> {
    return this._loading.asObservable();
  }
  set loading(value: boolean) {
    this._loading.next(value);
    this.load = value;
  }

  returnUrl: string;

  state: string;

  loginDisabled = true;

  constructor(/*public router: Router*/
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    // private alertService: AlertService,
    private userService: UserService,
    public dialog: MatDialog,
    private previewDialog: ProgOverlayService
  ) { }

  openDialog(message: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: message
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      this.model = {
        username: '',
        password: ''
      };
      this.onKeyUp();
    });
  }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';

    this.onKeyUp();
  }

  login() {

    this.showPreview();
    // this.alertService.error('test');

    // this.openDialog();

    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
          this.loading = false;
        },
        error => {
          // this.alertService.error(error);

          this.loading = false;
          this.openDialog(error);
        });
  }

  register() {

    this.showPreview();

    const user = new User();
    user.username = this.model.username;
    user.password = this.model.password;
    user.firstName = 'firstname';
    user.lastName = 'lastname';
    user.id = 1;

    this.loading = true;
    this.userService.create(user)
      .subscribe(
        data => {
          // this.alertService.success('Registration successful', true);
          this.router.navigate(['/f']);
          this.loading = false;
        },
        error => {
          // this.alertService.error(error);
          // this.openDialog(error);
          this.loading = false;
          this.openDialog(error);
        });
  }

  showPreview() {
    const ref = this.previewDialog.open();
    const sub = this.observeLoading.subscribe( c => {
      if ( !c && ref ) {
        sub.unsubscribe();
        ref.close();
      }
    });
  }

  onKeyUp() {
    this.loginDisabled = this.model.username.length < 1 || this.model.password.length < 1;
  }
}
