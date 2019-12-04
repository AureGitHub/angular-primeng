import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Validators, FormControl,FormGroup,FormBuilder} from '@angular/forms';


import {SelectItem} from 'primeng/api';
import { first } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    animations: [routerTransition()]
})


export class UsersComponent implements OnInit {

    displayDialog: boolean;

    user: User = {};

    selectedUser: User;

    newUser: boolean;

    users: User[];

    cols: any[];

    constructor(private userService: UserService) { }


    getUsers() {
        this.userService.getUsers().subscribe(
          data => {
          this.users = data;
          });
        }

    ngOnInit() {

        this.getUsers();

        this.cols = [
            { field: 'nombre', header: 'nombre' },
            { field: 'idposicion', header: 'idposicion' },
            
        ];
    }

    showDialogToAdd() {
        this.newUser = true;
        this.user = {};
        this.displayDialog = true;
    }

    save() {
        const users = [...this.users];
        if (this.newUser) {
            users.push(this.user);
        } else {
            users[this.users.indexOf(this.selectedUser)] = this.user;
        }

        this.users = users;
        this.user = null;
        this.displayDialog = false;
    }

    delete() {
        const index = this.users.indexOf(this.selectedUser);
        this.users = this.users.filter((val, i) => i !== index);
        this.user = null;
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newUser = false;
        this.user = this.cloneCar(event.data);
        this.displayDialog = true;
    }

    cloneCar(u: User): User {
        const user = {};
        // tslint:disable-next-line:forin
        for (let prop in u) {
            user[prop] = u[prop];
        }
        return user;
    }
}

