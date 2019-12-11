import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoadingService } from 'src/app/shared/services/loading.service';



@Component({ selector: 'loading', templateUrl: 'loading.component.html',
styleUrls: [] })
export class LoadingComponent implements OnInit, OnDestroy {
    private subscription: Subscription;

    loading = false;


    constructor(private loadingService: LoadingService) { }

    ngOnInit() {
        this.subscription = this.loadingService.getEstadoLoading()
            .subscribe(estadoLoading => {
                this.loading = estadoLoading;
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
