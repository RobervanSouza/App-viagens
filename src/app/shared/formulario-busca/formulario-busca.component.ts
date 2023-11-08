import { Component, EventEmitter, Output } from '@angular/core';

import { FormBuscaService } from './../../core/services/form-busca/form-busca.service';

@Component({
  selector: 'app-formulario-busca',
  templateUrl: './formulario-busca.component.html',
  styleUrls: ['./formulario-busca.component.scss'],
})
export class FormularioBuscaComponent {
  @Output() realizarBusca = new EventEmitter();
  constructor(
    public formBuscaService: FormBuscaService) {}

  buscar (){
    if(this.formBuscaService.formularioValido){

    const formBuscaValue = this.formBuscaService.obterDadosBusca();
    this.realizarBusca.emit(formBuscaValue)
    }else{
      alert('Preencha o Formulario!!!')
    }
  }

}
