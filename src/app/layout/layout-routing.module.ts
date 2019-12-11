import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { RoleGuard } from '../shared/guard/roles.guard';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'inicio', pathMatch: 'prefix' },
            { path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule) },
            { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
            { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule), canActivate: [RoleGuard],
            data: {idperfil: [1] }},

            { path: 'detalle-partido/:id', loadChildren: () => import('./detalle-partido/detalle-partido.module').then(m => m.DetallePartidoModule), canActivate: [RoleGuard],
            data: {idperfil: [1,2]} },

            { path: '404', loadChildren: () => import('./noautorizado/noautorizado.module').then(m => m.NoAutorizadoModule) },
            { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) },
            { path: '**', redirectTo: 'not-found' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
