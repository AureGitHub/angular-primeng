import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatMenuModule } from  '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [LayoutComponent, SidebarComponent, HeaderComponent],
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
    MatMenuModule
  ]
})
export class LayoutModule { }
