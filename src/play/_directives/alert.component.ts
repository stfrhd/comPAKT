import { Component, OnInit, Inject } from '@angular/core';

import { AlertService } from '../_services/index';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    moduleId: module.id.toString(),
    selector: 'prevo-alert',
    templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnInit {
    message: any;

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.alertService.getMessage().subscribe(
          m => { if (m) { console.log(m); } this.message = m; }
        );
    }
}

/*
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
*/
