import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CadastroUserService } from 'src/app/core/services/CadastroUser/cadastro-user.service';
import { FormularioCadastroService } from 'src/app/core/services/cadastrar/formulario-cadastro.service';
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
  formGrup!: FormGroup<any> | null;

  constructor(
   private tokenService: TokenService,
   private cadastroService: CadastroUserService,
   private formService: FormularioCadastroService

  ) {}
  ngOnInit(): void {
    this.token = this.tokenService.retornarToken();
    this.cadastroService.buscarCadastro(this.token).subscribe(cadastro =>{
      this.cadastro = cadastro;
      this.nome = this.cadastro.nome
      this.carregarFormulario();
    })
  }

  carregarFormulario(){
   this.formGrup = this.formService.getCadastro();
    this.formGrup?.patchValue({
    nome: this.cadastro.nome,
    nascimento: this.cadastro.nascimento,
    cpf: this.cadastro.cpf,
    telefone: this.cadastro.telefone,
    email: this.cadastro.email,
    senha: this.cadastro.senha,
    cidade: this.cadastro.cidade,
    estado: this.cadastro.estado,
    genero: this.cadastro.genero,
    })
  }

  deslogar () {
    console.log('logooooout')
  }
  atualizar(){
    console.log('cadastro atualizado')
  }
}
