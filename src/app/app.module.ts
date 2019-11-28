import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthGuard } from './shared';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module'
import { HttpClientModule } from '@angular/common/http';
import { GeneralService } from './shared/services/general.service';
import { AuthenticationService } from './shared/services/authentication.service';
import { AlertService } from './shared/services/alert.service';
import { MessageService } from 'primeng/components/common/messageservice';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CalendarModule,
    HttpClientModule,
    LanguageTranslationModule

  ],
  providers: [AuthGuard, GeneralService, AuthenticationService,AlertService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
