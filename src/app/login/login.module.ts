import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MatButtonModule, MatIconModule, MatFormFieldModule, MatCardModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        LoginRoutingModule,
        MatButtonModule,
        MatIconModule, 
        MatFormFieldModule,
        MatCardModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule {}
