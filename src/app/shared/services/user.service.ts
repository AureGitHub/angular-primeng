import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable, of } from 'rxjs';
import { User } from '../models/user';
import { tap, catchError } from 'rxjs/operators';
import { AlertService } from './alert.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

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

    getPosicion(): Observable<any[]> {
      return this.http.get<any[]>('api/posicion').pipe(
        tap(data => {},
            error => {this.alertService.error(JSON.stringify(error), false, 30000); })
      ); }

      getPerfil(): Observable<any[]> {
        return this.http.get<any[]>('api/perfil').pipe(
          tap(data => {},
              error => {this.alertService.error(JSON.stringify(error), false, 30000); })
        ); }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiurl).pipe(
      tap(data => {},
          error => {this.alertService.error(JSON.stringify(error), false, 30000); })
    ); }

    getUser(id: number): Observable<User> {

      return this.http.get<User>(`${this.apiurl}/${id}`).pipe(
        tap(_ =>{} ),
        catchError(this.handleError<User>(`getUser id=${id}`))
      );
    }

    updateUser (user: User): Observable<any> {
      return this.http.put(this.apiurl, user, this.httpOptions).pipe(
        tap(),
        catchError(this.handleError<any>('updateUser'))
      );
    }

    addUser (user: User): Observable<User> {
      return this.http.post<User>(this.apiurl, user, this.httpOptions).pipe(
        tap((newUser: User) => {}),
        catchError(this.handleError<User>('addUser'))
      );
    }

    deleteUser (user: User | number): Observable<User> {
      const id = typeof user === 'number' ? user : user.id;
      const url = `${this.apiurl}/${id}`;

      return this.http.delete<User>(url, this.httpOptions).pipe(
        tap(),
        catchError(this.handleError<User>('deleteUser'))
      );
    }



}
