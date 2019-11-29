import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, 
  MatButtonModule, MatMenuModule, MatCardModule } from  '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";
import { AlertComponent } from './components/alert/alert.component';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [LayoutComponent,  HeaderComponent,AlertComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    TranslateModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    ToastModule,
    MatCardModule
  ]
})
export class LayoutModule { }
