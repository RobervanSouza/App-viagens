import { Component } from '@angular/core';
import { UsuarioService } from './../../core/services/usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor (
    private userService: UsuarioService,
    private rota : Router
  ) {}

  user$ = this.userService.retornarUsuario();
  logout(){
    this.userService.logout()
    this.rota.navigate(['/login'])
  }
}
