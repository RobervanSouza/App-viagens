import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormularioCadastroService {

  formCadastrar: FormGroup | null = null;

  getCadastro (): FormGroup | null {
    return this.formCadastrar
  }

  setCadastro ( form:FormGroup){
     this.formCadastrar = form
  }
}
