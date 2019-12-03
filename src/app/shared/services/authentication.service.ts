import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {

        return this.currentUserSubject.value;
    }

    login(userLog: User): Observable<boolean> {



        return this.http.get<User[]>('../../../assets/fake/user.json')
        .pipe(map(users => {
          let user = users.find(item =>
            item.email === userLog.email && item.password ===  userLog.password );
          if(user){
            user.isAdmin = user.idperfil === 1;
            user.isConectado = true;
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
          }

          return user!=null;
        }));

    }


    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
