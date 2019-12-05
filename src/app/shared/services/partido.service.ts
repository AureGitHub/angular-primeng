import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable, of } from 'rxjs';
import { User } from '../models/user';
import { tap, catchError } from 'rxjs/operators';
import { AlertService } from './alert.service';

@Injectable({
    providedIn: 'root'
  })

  export class PartidoService {
    apiurl = 'api/users';

    headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
    httpOptions = {
      headers: this.headers
    };

    constructor(
        private alertService: AlertService,
        private http: HttpClient) { }


    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            const strError = '(' + operation + ') ' + error.status + ', ' + error.statusText +  ', ' + error.url;


            // TODO: send the error to remote logging infrastructure
            this.alertService.error(strError, false, 30000);

            // TODO: better job of transforming error for user consumption

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
        }


        getPartidos(): Observable<any[]> {

            return this.http.get<any[]>(this.apiurl).pipe(
              tap(_ =>{} ),
              catchError(this.handleError<any[]>(`getPartidos`))
            );
          }

  }