import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [LayoutComponent, SidebarComponent, HeaderComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    TranslateModule
  ]
})
export class LayoutModule { }
