import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SelectItem } from 'primeng/api';
import { Partido } from 'src/app/shared/models/partido';
import { PartidoService } from 'src/app/shared/services/partido.service';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-lista-partidos',
  templateUrl: './lista-partidos.component.html',
  styleUrls: ['./lista-partidos.component.css']
})
export class ListaPartidosComponent implements OnInit {

  users: User[] = [];

  selectedUser: User;

    displayDialog: boolean;

    sortOptions: SelectItem[];

    sortKey: string;

    sortField: string;

    sortOrder: number;

  constructor(
    private userService: UserService,
    private alertService: AlertService
    ) { }

  getUsers(){
    this.userService.getUsers().subscribe(
      data => {
      this.users = data;
      });
  }
  ngOnInit() {
    this.getUsers();

    this.sortOptions = [
      {label: 'Nombre', value: 'nombre'},
      {label: 'email', value: 'email'}
  ];
  }

  onSortChange(event) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    } else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

onDialogHide() {
    this.selectedUser = null;
}




}
