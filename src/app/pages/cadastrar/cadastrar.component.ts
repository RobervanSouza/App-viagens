import { Component } from '@angular/core';
import { FormularioCadastroService } from 'src/app/core/services/cadastrar/formulario-cadastro.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss'],
})
export class CadastrarComponent {
  perfilComponent = false;


  constructor(private formularioService: FormularioCadastroService){}
  cadastrar(){
    const formular = this.formularioService.getCadastro
    console.log('cadastrar ok', formular)
  }
}
