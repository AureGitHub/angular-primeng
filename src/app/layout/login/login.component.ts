import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Validators, FormControl,FormGroup} from '@angular/forms';
import { first } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { User } from 'src/app/shared/models/user';
import { AlertService } from 'src/app/shared/services/components/alert.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;
    private dialogConfig;

    loading = false;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService
    ) {
        // if (this.authenticationService.currentUserValue) {
        //     this.router.navigate(['/']);
        // }
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            'email': new FormControl('',  [Validators.required,Validators.email]),
            'password': new FormControl('', [Validators.required,Validators.compose([Validators.minLength(6)])]),
         });

        this.loginForm.reset({email: 'admin@a.es', password : '123456'});


    }

    public hasError = (controlName: string, errorName: string) => {
        return this.loginForm.controls[controlName].hasError(errorName);
      }

    public onCancel = () => {
        this.loginForm.reset();
    }

    public onsubmit = () => {
        if (this.loginForm.valid) {

            this.alertService.clear();

            this.loading = true;

            let user: User = {};
            user.email = this.loginForm.controls['email'].value;
            user.password = this.loginForm.controls['password'].value;

            this.authenticationService.login(user)
            .pipe(first())
            .subscribe(
                data => {
                  if (data) {
                    this.router.navigate(['/']);
                  } else {
                  this.alertService.error('usuario/password incorrecto');
                  }
                });




        }
      }

}
