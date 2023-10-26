import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormularioCadastroService {

  forCadastrar: FormGroup | null = null;

  getCadastro (): FormGroup | null {
    return this.forCadastrar
  }

  setCadastro ( form:FormGroup){
     this.forCadastrar = form
  }
}
