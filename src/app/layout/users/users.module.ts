import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { UsersComponent } from './users.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { UsersRoutingModule } from './users-routing.module';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import {TableModule} from 'primeng/table';


@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        UsersRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        ToastModule,
        ButtonModule,
        DialogModule,
        DropdownModule,
        InputTextModule,
        TabViewModule,
        TableModule
    ],
    declarations: [UsersComponent]
})
export class UsersModule {} 
