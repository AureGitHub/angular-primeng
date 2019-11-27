import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { CalendarModule } from 'primeng/calendar';
import { MenubarModule } from 'primeng/menubar';
import { ListaPartidosComponent } from './components/lista-partidos/lista-partidos.component';

@NgModule({
  declarations: [InicioComponent, ListaPartidosComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
    CalendarModule,
    MenubarModule
  ]
})
export class InicioModule { }
