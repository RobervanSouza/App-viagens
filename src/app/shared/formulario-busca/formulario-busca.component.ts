import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-formulario-busca',
  templateUrl: './formulario-busca.component.html',
  styleUrls: ['./formulario-busca.component.scss'],
})
export class FormularioBuscaComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModalComponent);
  }
}
