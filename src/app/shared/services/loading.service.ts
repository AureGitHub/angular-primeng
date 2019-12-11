import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class LoadingService {

    private subject = new Subject<any>();

    getEstadoLoading(): Observable<any> {
        return this.subject.asObservable();
    }

    mostar(estado: boolean) {
        this.subject.next(estado);
    }


}