import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { PaginaCuentaComponent as PaginaCrearProyectoComponent } from './Components/pagina-crear-proyecto/pagina-crear-proyecto.component';
import { PaginaHomeComponent } from './Components/pagina-home/pagina-home.component';
import { PaginaCuenta1Component as PaginaCrearUsuarioComponent } from './Components/pagina-crear-usuario/pagina-crear-usuario.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'principal', component: PaginaHomeComponent },
    { path: 'crearUsuario', component: PaginaCrearUsuarioComponent },
    { path: 'crearProyecto', component: PaginaCrearProyectoComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }