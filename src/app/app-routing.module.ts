import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { authGuarde } from './core/guards/auth.guard';
import { BuscaComponent } from './pages/busca/busca.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastrar',
    component: CadastrarComponent
  },
  {
    path: 'busca',
    component: BuscaComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent, canActivate:[authGuarde]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
