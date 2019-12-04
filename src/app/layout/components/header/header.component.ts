import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { GeneralService } from 'src/app/shared/services/general.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { User } from 'src/app/shared/models/user';
import { DatePipe } from '@angular/common';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  myDate: string;

    title: string;

    currentUser: User;



    constructor(
        public dialog: MatDialog,
        private authenticationService: AuthenticationService,
        private generalService: GeneralService,
        private translate: TranslateService,
        private datePipe: DatePipe,
        public router: Router) {
          const now = new  Date();
          this.myDate = this.datePipe.transform(now, 'dd-MM-yyyy hh:mm');
          this.authenticationService.currentUser.subscribe(x => this.currentUser = x);



    }



    logout() {

      const dialogRef = this.dialog.open(DialogComponent, {
        width: '250px',
        data: {title: 'Cierre de sesión', message: '¿Desea cerrar la sesión?'}
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.authenticationService.logout();
          this.router.navigate(['/']);
        }
      });



    }

    ngOnInit() {
        this.title = this.generalService.getTitle();

    }




}
