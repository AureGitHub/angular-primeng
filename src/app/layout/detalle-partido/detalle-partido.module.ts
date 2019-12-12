import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallePartidoRoutingModule } from './detalle-partido-routing.module';
import { DetallePartidoComponent } from './detalle-partido.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [DetallePartidoComponent],
  imports: [
    CommonModule,
    DetallePartidoRoutingModule,
    MaterialModule
  ]
})
export class DetallePartidoModule {}
