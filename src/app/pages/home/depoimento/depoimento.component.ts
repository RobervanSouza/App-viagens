import { Component } from '@angular/core';
import { DepoimentosService } from 'src/app/core/services/depoimentos/depoimentos.service';
import { Depoimento } from 'src/app/core/types/type';

@Component({
  selector: 'app-depoimento',
  templateUrl: './depoimento.component.html',
  styleUrls: ['./depoimento.component.scss'],
})
export class DepoimentoComponent {
  depoimentos: Depoimento[] = [];
  constructor(private service: DepoimentosService) {}
  ngOnInit(): void {
    this.service.listar().subscribe((res) => {
      this.depoimentos = res;
    });
  }
}
