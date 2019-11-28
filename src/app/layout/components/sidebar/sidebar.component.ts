import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
 
    @Output() sidenavClose = new EventEmitter();

    constructor(private translate: TranslateService, public router: Router) {
       
    }

    public onSidenavClose = () => {
        this.sidenavClose.emit();
      }

    ngOnInit() {  
    }
}
