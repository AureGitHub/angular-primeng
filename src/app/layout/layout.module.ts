import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { TranslateModule } from '@ngx-translate/core';

import {ToastModule} from 'primeng/toast';
import { AlertComponent } from './components/alert/alert.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [LayoutComponent,  HeaderComponent, AlertComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    TranslateModule,
    ToastModule,
    MaterialModule
    
  ]
})
export class LayoutModule { }
