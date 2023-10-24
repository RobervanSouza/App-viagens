import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seleciona-passageiros',
  templateUrl: './seleciona-passageiros.component.html',
  styleUrls: ['./seleciona-passageiros.component.scss']
})
export class SelecionaPassageirosComponent {
  @Input() titulo: string = ''
  @Input() subTitulo: string = ''
}
