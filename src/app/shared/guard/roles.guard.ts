
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class RoleGuard implements CanActivate {


  constructor(private authenticationService: AuthenticationService, private _router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const currentUser = this.authenticationService.currentUserValue;

    if (currentUser && currentUser.idperfil === next.data.idperfil) {
      return true;
    }

    if(!currentUser){
      this._router.navigate(['/']);
    return false;
    }
    // navigate to not found page
    this._router.navigate(['/404']);
    return false;
  }

}
