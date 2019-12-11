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



    apiurl = 'api/partidos';

    apiurlpartidoxjugador = 'api/partidoxjugador';



    constructor(
        private alertService: AlertService,
        private http: HttpClient) { }


    


        getPartidos(): Observable<any[]> {

            return this.http.get<any[]>(this.apiurl).pipe(
              tap(_ =>{} )
            );
          }


          getPartidosXJugadores() {
            return this.http.get<any[]>(this.apiurlpartidoxjugador).pipe(
              tap(_ =>{} )
            );
          }

          addPartidosXJugadores(obj: any) {
            return this.http.post<User>(this.apiurlpartidoxjugador, obj).pipe(
              tap(_ => {})
            );
          }


          deletePartidosXJugadores( idpartidoxjugador: any) {

            const url = `${this.apiurlpartidoxjugador}/${idpartidoxjugador}`;

            return this.http.delete<User>(url).pipe(
              tap()
            );
          }



  }