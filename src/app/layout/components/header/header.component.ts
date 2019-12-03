import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { GeneralService } from 'src/app/shared/services/general.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { User } from 'src/app/shared/models/user';
import { DatePipe } from '@angular/common';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  myDate : string;

    title: string;

    currentUser: User;



    constructor(
        private authenticationService: AuthenticationService,
        private generalService: GeneralService,
        private translate: TranslateService,
        private datePipe: DatePipe,
        public router: Router) {
          let now = new  Date();
          this.myDate = this.datePipe.transform(now, 'dd-MM-yyyy hh:mm:ss');
            this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

    }



    logout(){

      this.authenticationService.logout();


    }

    ngOnInit() {
        this.title = this.generalService.getTitle();

    }




}
