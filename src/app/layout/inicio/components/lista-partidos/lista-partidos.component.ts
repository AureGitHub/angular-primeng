import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/UserService';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-lista-partidos',
  templateUrl: './lista-partidos.component.html',
  styleUrls: ['./lista-partidos.component.css']
})
export class ListaPartidosComponent implements OnInit {

  users: User[]=[];
  constructor(
    private userService: UserService,
    private alertService: AlertService
    ) { }

  getUsers(){
    this.userService.getUsers().subscribe(
      data => {
      this.users=data;
      },
      error =>{this.alertService.error(JSON.stringify(error))});
  }
  ngOnInit() {
    this.getUsers();
  }

}
