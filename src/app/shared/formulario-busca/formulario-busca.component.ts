import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormBuscaService } from './../../core/services/form-busca/form-busca.service';

@Component({
  selector: 'app-formulario-busca',
  templateUrl: './formulario-busca.component.html',
  styleUrls: ['./formulario-busca.component.scss'],
})
export class FormularioBuscaComponent {
  constructor(public dialog: MatDialog, 
    public formBuscaService: FormBuscaService) {}

  openDialog() {
    this.dialog.open(ModalComponent,{
      width: '50%',
    });
  }
}
