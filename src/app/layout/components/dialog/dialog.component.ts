import { Component, Inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DialogData {
    title: string;
    message: string;
  }


@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: []
})
export class DialogComponent  implements OnInit  {
    private subscription: Subscription;
    result = true;

        constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

        onNoClick(): void {
            this.dialogRef.close();
        }

      ngOnInit() {}
}
