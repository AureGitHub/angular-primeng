import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { TranslateModule } from '@ngx-translate/core';

import {ToastModule} from 'primeng/toast';
import { AlertComponent } from './components/alert/alert.component';
import { MaterialModule } from '../material/material.module';
import {ButtonModule} from 'primeng/button';
import { DialogComponent } from './components/dialog/dialog.component';
import { UserService } from '../shared/services/user.service';
import { PartidoService } from '../shared/services/partido.service';
import { LoadingComponent } from './components/loading/loading.component';
import { NgxLoadingModule } from 'ngx-loading';


@NgModule({
  declarations: [LayoutComponent,  HeaderComponent, AlertComponent, DialogComponent, LoadingComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    TranslateModule,
    ToastModule,
    MaterialModule,
    ButtonModule,
    NgxLoadingModule.forRoot({})

  ],
  entryComponents: [DialogComponent],
  providers: [UserService, PartidoService]
})
export class LayoutModule { }
