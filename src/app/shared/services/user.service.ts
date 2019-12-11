import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {  Observable, of } from 'rxjs';
import { User } from '../models/user';
import { tap, catchError } from 'rxjs/operators';
import { AlertService } from './alert.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiurl = 'api/users';


  constructor(
    private alertService: AlertService,
    private http: HttpClient) { }


    getPosicion(): Observable<any[]> {
      return this.http.get<any[]>('api/posicion').pipe(
        tap(data => {})
      ); }

      getPerfil(): Observable<any[]> {
        return this.http.get<any[]>('api/perfil').pipe(
          tap(data => {})
        ); }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiurl).pipe(
      tap(data => {})
    ); }

    getUser(id: number): Observable<User> {

      return this.http.get<User>(`${this.apiurl}/${id}`).pipe(
        tap(_ =>{} )
      );
    }

    updateUser (user: User): Observable<any> {
      return this.http.put(this.apiurl, user).pipe(
        tap()
      );
    }

    addUser (user: User): Observable<User> {
      return this.http.post<User>(this.apiurl, user).pipe(
        tap((newUser: User) => {})
      );
    }

    deleteUser (user: User | number): Observable<User> {
      const id = typeof user === 'number' ? user : user.id;
      const url = `${this.apiurl}/${id}`;

      return this.http.delete<User>(url).pipe(
        tap()
      );
    }



}
