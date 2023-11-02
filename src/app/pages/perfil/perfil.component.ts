import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroUserService } from 'src/app/core/services/CadastroUser/cadastro-user.service';
import { FormularioCadastroService } from 'src/app/core/services/cadastrar/formulario-cadastro.service';
import { TokenService } from 'src/app/core/services/token/token.service';
import { PessoaUsuaria } from 'src/app/core/types/type';
import { UsuarioService } from './../../core/services/usuario/usuario.service';

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
   private formService: FormularioCadastroService,
   private rotas: Router,
   private userService: UsuarioService,
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
   this.userService.logout();
   this.rotas.navigate(['/login']);
  }
  atualizar(){
    const dadosAtualizado = {
      nome: this.formGrup?.value.nome,
      nascimento: this.formGrup?.value.nascimento,
      cpf: this.formGrup?.value.cpf,
      telefone: this.formGrup?.value.telefone,
      email: this.formGrup?.value.email,
      senha: this.formGrup?.value.senha,
      cidade: this.formGrup?.value.cidade,
      estado: this.formGrup?.value.estado,
      genero: this.formGrup?.value.genero,
    }

    this.cadastroService.editarCadastro(dadosAtualizado, this.token).subscribe({
      next:()=>{
        alert("Cadastro atualizado com sucesso")
        this.rotas.navigate(["/"])
      },
      error(err) {
          console.log(err, "Erro ao atualizar cadastro!!!")
      },
    })
  }
}
