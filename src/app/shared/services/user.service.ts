import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { User } from '../models/user';
import { tap, catchError } from 'rxjs/operators';
import { AlertService } from './alert.service';
import { Car } from 'src/app/layout/users/car';

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

  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiurl).pipe(
      tap(data => {},
          error => {this.alertService.error(JSON.stringify(error), false, 30000); })
    ); }


    getCars(): Observable<Car[]> {
      return this.http.get<Car[]>('api/cars').pipe(
        tap(data => {},
            error => {this.alertService.error(JSON.stringify(error), false, 30000); })
      ); }
}
