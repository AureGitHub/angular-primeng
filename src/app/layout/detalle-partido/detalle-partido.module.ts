import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallePartidoRoutingModule } from './detalle-partido-routing.module';
import { DetallePartidoComponent } from './detalle-partido.component';



@NgModule({
  declarations: [DetallePartidoComponent],
  imports: [
    CommonModule,
    DetallePartidoRoutingModule
  ]
})
export class DetallePartidoModule { }
