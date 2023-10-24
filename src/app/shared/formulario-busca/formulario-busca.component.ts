import { Component } from '@angular/core';

import { FormBuscaService } from './../../core/services/form-busca/form-busca.service';

@Component({
  selector: 'app-formulario-busca',
  templateUrl: './formulario-busca.component.html',
  styleUrls: ['./formulario-busca.component.scss'],
})
export class FormularioBuscaComponent {
  constructor(
    public formBuscaService: FormBuscaService) {}

  buscar (){
    console.log(this.formBuscaService.formBusca.value)
  }

}
