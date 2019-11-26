import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { CalendarModule } from 'primeng/calendar';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
    CalendarModule,
    MenubarModule
  ]
})
export class InicioModule { }
