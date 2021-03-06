import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';



import { routerTransition } from 'src/app/router.animations';

import { User } from 'src/app/shared/models/user';

import { MatDialog } from '@angular/material';
import { DialogComponent } from '../components/dialog/dialog.component';
import { HttpGralService, apisUrl } from 'src/app/shared/services/http/http.gral.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [routerTransition()]
})


export class UsersComponent implements OnInit {

  displayDialog: boolean;

  Selpos: any;
  Selper: any;

  user: User = {};

  selectedUser: User;

  newUser: boolean;

  users: User[];

  cols: any[];

  lstPosicion: any[];
  lstPerfil: any[];

  constructor(
    public dialog: MatDialog,
    private httpGralService: HttpGralService) { }


  getUsers() {
    this.httpGralService.getDatas(apisUrl.user).subscribe(
      data => {
        this.users = data;
      });
  }

  getPosicion() {
    this.httpGralService.getDatas(apisUrl.posicion).subscribe(
      data => {
        this.lstPosicion = data;
      });
  }

  getPerfil() {
    this.httpGralService.getDatas(apisUrl.perfil).subscribe(
      data => {
        this.lstPerfil = data;
      });
  }

  ngOnInit() {


    this.getUsers();

    this.getPosicion();
    this.getPerfil();

    this.cols = [
      { field: 'nombre', header: 'nombre' },
      { field: 'idposicion', header: 'idposicion' },
      { field: 'idperfil', header: 'idperfil' },


    ];
  }




  showDialogToAdd() {

    this.newUser = true;
    this.user = {};
    this.displayDialog = true;

    this.Selpos = this.lstPosicion.find(a => a.id === 1);
    this.Selper = this.lstPerfil.find(a => a.id === 1);

    this.user.idperfil = 1;
    this.user.idposicion = 1;

  }

  save() {

    if (this.newUser) {
      this.httpGralService.addData(apisUrl.user, this.user)
        .subscribe(hero => {
          this.users.push(hero);
          this.user = null;
          this.displayDialog = false;
        });
    } else {
      this.httpGralService.updateData(apisUrl.user, this.user)
        .subscribe(() => {
          let findUserInList = this.users.find(item => item === this.selectedUser);
          let index = this.users.indexOf(findUserInList);
          this.users[index] = this.user;
          this.user = null;
          this.displayDialog = false;

        });

    }


  }

  deleteConfirm() {
    this.displayDialog = false;
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { title: 'Borrado', message: '¿Desea borrar el usuario ?' + this.selectedUser.nombre }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.httpGralService.deleteDataById(apisUrl.user, this.selectedUser.id)
          .subscribe(() => {
            const index = this.users.indexOf(this.selectedUser);
            this.users = this.users.filter((val, i) => i !== index);
            this.user = null;
          });
      }
    });
  }



  onRowSelect(event) {
    this.newUser = false;
    this.user = this.cloneCar(event.data);
    this.Selpos = this.lstPosicion.find(a => a.id === event.data.idposicion);
    this.Selper = this.lstPerfil.find(a => a.id === event.data.idposicion);
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

