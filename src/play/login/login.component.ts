import { UserService } from './../_services/user.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService, AlertService } from '../_services';
import { User } from '../_models';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


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

  model = {
    username: 'test',
    password: 'test'
  };
  loading = false;
  returnUrl: string;

  state: string;

  constructor(/*public router: Router*/
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private userService: UserService,
    public dialog: MatDialog
  ) { }

  openDialog(message: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: message
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      /*this.model = {
        username: '',
        password: ''
      };*/
    });
  }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  login() {
    // this.alertService.error('test');

    // this.openDialog();

    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error);
          // this.openDialog(error);
          this.loading = false;
        });
  }

  register() {

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
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
         // this.openDialog(error);
          this.loading = false;
        });
  }
}
