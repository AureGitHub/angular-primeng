import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        LoginRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule {}
