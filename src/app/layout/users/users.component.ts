import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Validators, FormControl,FormGroup,FormBuilder} from '@angular/forms';


import {SelectItem} from 'primeng/api';
import { first } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { User } from 'src/app/shared/models/user';
import { Car } from './car';
import { UserService } from 'src/app/shared/services/user.service';


@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    animations: [routerTransition()]
})


export class UsersComponent implements OnInit {

    displayDialog: boolean;

    car: Car = {};

    selectedCar: Car;

    newCar: boolean;

    cars: Car[];

    cols: any[];

    constructor(private userService: UserService) { }


    getCars() {
        this.userService.getCars().subscribe(
          data => {
          this.cars = data;
          });
        }

    ngOnInit() {

        this.getCars();

        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    }

    showDialogToAdd() {
        this.newCar = true;
        this.car = {};
        this.displayDialog = true;
    }

    save() {
        const cars = [...this.cars];
        if (this.newCar) {
            cars.push(this.car);
        } else {
            cars[this.cars.indexOf(this.selectedCar)] = this.car;
        }

        this.cars = cars;
        this.car = null;
        this.displayDialog = false;
    }

    delete() {
        const index = this.cars.indexOf(this.selectedCar);
        this.cars = this.cars.filter((val, i) => i != index);
        this.car = null;
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.displayDialog = true;
    }

    cloneCar(c: Car): Car {
        const car = {};
        // tslint:disable-next-line:forin
        for (let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }
}

