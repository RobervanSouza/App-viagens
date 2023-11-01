import { Component, OnInit } from '@angular/core';
import { CadastroUserService } from 'src/app/core/services/CadastroUser/cadastro-user.service';
import { TokenService } from 'src/app/core/services/token/token.service';
import { PessoaUsuaria } from 'src/app/core/types/type';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  titulo = 'Olá ';
  textoBotao = 'ATUALIZAR';
  perfilComponent = true;

  token= '';
  nome = '';
  cadastro!: PessoaUsuaria;

  constructor(
   private tokenService: TokenService,
   private cadastroService: CadastroUserService

  ) {}
  ngOnInit(): void {
    this.token = this.tokenService.retornarToken();
    this.cadastroService.buscarCadastro(this.token).subscribe(cadastro =>{
      this.cadastro = cadastro;
      this.nome = this.cadastro.nome
    })
  }

 

  deslogar () {
    console.log('logooooout')
  }
  atualizar(){
    console.log('cadastro atualizado')
  }
}
