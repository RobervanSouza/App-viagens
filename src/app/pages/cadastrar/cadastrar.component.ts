import { Component } from '@angular/core';
import { CadastroUserService } from 'src/app/core/services/CadastroUser/cadastro-user.service';
import { FormularioCadastroService } from 'src/app/core/services/cadastrar/formulario-cadastro.service';
import { PessoaUsuaria } from 'src/app/core/types/type';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss'],
})
export class CadastrarComponent {
  perfilComponent = false;

  constructor(
    private formularioService: FormularioCadastroService,
    private cadastroUser: CadastroUserService
  ) {}

  cadastrar() {
    const formCadastrar = this.formularioService.getCadastro();

    if (formCadastrar?.valid) {
      const novoCadastrar = formCadastrar.getRawValue() as PessoaUsuaria;
      console.log(novoCadastrar)
      this.cadastroUser.cadastrar(novoCadastrar).subscribe({
        next: (value) => {
          console.log('cadastrar ok', value);
        },
        error:(err) => {
            console.log('cadastrar error', err);
        },
      });
    }
  }
}
