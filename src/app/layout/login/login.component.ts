import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Validators, FormControl,FormGroup,FormBuilder} from '@angular/forms';


import {SelectItem} from 'primeng/api';
import { first } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';


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

         this.loginForm.reset({email: 'a@a.es', password : '23456'});

         
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

            this.authenticationService.login(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value)
            .subscribe(res => {
                if(res){}
                else{
                    this.alertService.error("usuario/password incorrecto");
                }
            });
            

        }
      }

}
