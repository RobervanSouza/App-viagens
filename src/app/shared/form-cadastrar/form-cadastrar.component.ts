import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormularioCadastroService } from 'src/app/core/services/cadastrar/formulario-cadastro.service';
import { UnidadeFederativa } from 'src/app/core/types/type';
import { FormValidator } from '../validate/form-validator';

@Component({
  selector: 'app-form-cadastrar',
  templateUrl: './form-cadastrar.component.html',
  styleUrls: ['./form-cadastrar.component.scss'],
})
export class FormCadastrarComponent implements OnInit {
  cadastroForm!: FormGroup;
  estadoControl = new FormControl<UnidadeFederativa | null>(
    null,
    Validators.required
  );

  @Input() perfilComponent = false;
  @Input() textoBotao: string = "CADASTRAR"
  @Input() titulo: string = "Crie Sua Conta"
  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();
  @Output() sair: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormularioCadastroService
  ) {}

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      nome: [null, Validators.required],
      nascimento: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      cidade: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(3)]],
      genero: ['outro'],
      telefone: [null, Validators.required],
      estado: this.estadoControl,
      confirmarEmail: [
        null,
        [
          Validators.required,
          Validators.email,
          FormValidator.validCampo('email'),
        ],
      ],
      confirmarSenha: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          FormValidator.validCampo('senha'),
        ],
      ],
      aceitarTermos: [false, [Validators.requiredTrue]],
    });

    if(this.perfilComponent) {
      this.cadastroForm.get('aceitarTermos')?.setValidators(null)
    } else{
      this.cadastroForm
        .get('aceitarTermos')
        ?.setValidators([Validators.requiredTrue]);
    }
    this.cadastroForm.get('aceitarTermos')?.updateValueAndValidity();



    this.formService.setCadastro(this.cadastroForm);
  }

  cadastrar() {
    this.onSubmit.emit();
  }

  deslogar(){
    this.sair.emit();
  }
}
