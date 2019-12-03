import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'inicio', pathMatch: 'prefix' },
            { path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule) },
            { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
