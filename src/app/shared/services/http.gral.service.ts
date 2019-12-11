import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient } from '@angular/common/http';
import { AlertService } from './alert.service';
import { tap } from 'rxjs/operators';

// export interface ApiRrl {
//   user: string,
//   partido: string,
// }

export const apisUrl = {
  user: 'api/users',
  partido: 'api/partidos',
  posicion: 'api/posicion',
  perfil: 'api/perfil'
}

@Injectable({
  providedIn: 'root'
})


export class HttpGralService {



  constructor(
    private alertService: AlertService,
    private http: HttpClient
  ) { }


  getDatas(url: string): Observable<any[]> {
    return this.http.get<any[]>(url).pipe(
      tap(data => {})
    ); }

    getDataById(url: string, id: number): Observable<any> {

      return this.http.get<any>(`${url}/${id}`).pipe(
        tap(_ =>{} )
      );
    }

    updateData (url: string, obj: any): Observable<any> {
      return this.http.put(url, obj).pipe(
        tap()
      );
    }

    addData (url: string, obj: any): Observable<any> {
      return this.http.post<any>(url, obj).pipe(
        tap((newUser: any) => {})
      );
    }

    deleteDataById (url: string, id: number): Observable<any> {

      return this.http.delete<any>(`${url}/${id}`).pipe(
        tap()
      );
    }

}
