import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoAutorizadoComponent } from './noautorizado.component';
import { NoAutorizadoRoutingModule } from './noautorizado-routing.module';


@NgModule({
    imports: [
        CommonModule,
        NoAutorizadoRoutingModule
    ],
    declarations: [NoAutorizadoComponent]
})
export class NoAutorizadoModule {}
