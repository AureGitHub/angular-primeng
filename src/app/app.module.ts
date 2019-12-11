import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthGuard } from './shared';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GeneralService } from './shared/services/general.service';
import { AuthenticationService } from './shared/services/authentication.service';
import { AlertService } from './shared/services/alert.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { DatePipe } from '@angular/common';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemHeroService } from './shared/services/fake-bd-ptepraga.service';
import { RoleGuard } from './shared/guard/roles.guard';
import { LoadingService } from './shared/services/loading.service';
import { InterceptorService } from './shared/services/interceptor.service';
import { HttpGralService } from './shared/services/http.gral.service';



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
    LanguageTranslationModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemHeroService)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    AuthGuard,
    RoleGuard,
    GeneralService,
    HttpGralService,
    AuthenticationService,
    AlertService,
    LoadingService,
    MessageService,
    DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
