import { MaterialModule } from 'src/app/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { CalendarModule } from 'primeng/calendar';
import { ListaPartidosComponent } from './components/lista-partidos/lista-partidos.component';
import {DataViewModule} from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import {PanelModule} from 'primeng/panel';
import {ToolbarModule} from 'primeng/toolbar';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [InicioComponent, ListaPartidosComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
    CalendarModule,
    MaterialModule,
    DataViewModule,
    DropdownModule,
    PanelModule,
    ToolbarModule,
    NgxLoadingModule.forRoot({})
  ]
})
export class InicioModule { }
