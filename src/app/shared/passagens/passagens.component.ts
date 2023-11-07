import { Component, Input } from '@angular/core';
import { Passagem } from 'src/app/core/types/type';

@Component({
  selector: 'app-passagens',
  templateUrl: './passagens.component.html',
  styleUrls: ['./passagens.component.scss'],
})
export class PassagensComponent {
  @Input() passagem!: Passagem;
}
