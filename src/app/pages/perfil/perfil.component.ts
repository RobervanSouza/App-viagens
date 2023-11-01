import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent {
  titulo = 'Olá';
  textoBotao = 'ATUALIZAR';
  perfilComponent = true;

  deslogar () {
    console.log('logooooout')
  }
  atualizar(){
    console.log('cadastro atualizado')
  }
}
