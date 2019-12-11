import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SelectItem } from 'primeng/api';
import { Partido } from 'src/app/shared/models/partido';
import { PartidoService } from 'src/app/shared/services/partido.service';
import { User } from 'src/app/shared/models/user';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material';
import { DialogComponent } from 'src/app/layout/components/dialog/dialog.component';



@Component({
  selector: 'app-lista-partidos',
  templateUrl: './lista-partidos.component.html',
  styleUrls: ['./lista-partidos.component.css']
})
export class ListaPartidosComponent implements OnInit {

  public loading = false;

  partidos: Partido[] = [];

  selectedPartido: Partido;

    displayDialog: boolean;

    sortOptions: SelectItem[];

    sortKey: string;

    sortField: string;

    sortOrder: number;

    currentUser: User;

  constructor(
    private partidoService: PartidoService,
    private alertService: AlertService,
    private datePipe: DatePipe,
    public dialog: MatDialog,
    private authenticationService: AuthenticationService
    ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    getPartidos(){

      let partidos_: Partido[] = [];

  

      this.partidoService.getPartidos().subscribe(
      data => {        
        partidos_ = data;

        partidos_.sort(function(a, b){
        var keyA = new Date(a.dia),
            keyB = new Date(b.dia);
        // Compare the 2 dates
        if(keyA < keyB) return -1;
        if(keyA > keyB) return 1;
        return 0;
    });


        this.partidoService.getPartidosXJugadores().subscribe(
        data =>
        {
          partidos_.forEach(
            partido =>
            {

              partido.dia = this.datePipe.transform(new  Date(partido.dia), 'dd-MM-yyyy');

              const jugadorespartido = data.filter(a => a.idpartido === partido.id);
              if (this.currentUser) {

                const partidoxjugador = jugadorespartido.find(a => a.idjugador === this.currentUser.id);
                partido.idpartidoxjugador =  partidoxjugador  ? partidoxjugador.id : null;

                partido.esCreador = partido.idcreador === this.currentUser.id;
              } else {
                partido.esCreador = false;
              }
            }
            );

            this.partidos = partidos_;
            
        }
      );

      });
  }
  ngOnInit() {
    this.getPartidos();

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
    this.selectedPartido = null;
}

Apuntate(partido: Partido){
  const dialogRef = this.dialog.open(DialogComponent, {
    width: '250px',
    data: {title: 'Apúntate al partido', message: 'Te vas a apuntar al partido ' + partido.dia + ' '  + partido.hora + ' ¿Desea apuntarse?'}
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.partidoService.addPartidosXJugadores({idjugador: this.currentUser.id, idpartido: partido.id }).subscribe(
        result => {
          this.getPartidos();
      });
    }
  });
}

Borrate(partido: Partido){
  const dialogRef = this.dialog.open(DialogComponent, {
    width: '250px',
    data: {title: 'Bórrate del partido', message: 'Te vas a borrar del partido ' + partido.dia + ' '  + partido.hora + ' ¿Deseas borrarte?'}
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.partidoService.deletePartidosXJugadores(partido.idpartidoxjugador).subscribe(
        result => {
          this.getPartidos();
      });
    }
  });
}






}
