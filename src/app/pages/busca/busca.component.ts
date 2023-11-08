import { Component, OnInit } from '@angular/core';
import { PassagensService } from './../../core/services/passagens/passagens.service';
import { DadosBusca, Passagem } from 'src/app/core/types/type';
import { FormBuscaService } from 'src/app/core/services/form-busca/form-busca.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss'],
})
export class BuscaComponent implements OnInit {
  passagens: Passagem[] = [];
  constructor(
    private passagensService: PassagensService,
    private formBuscaService: FormBuscaService
  ) {}
  ngOnInit(): void {
    const buscap = {
      data: new Date().toISOString,
      pagina: 1,
      porPagina: 25,
      somenteIda: false,
      passageirosAdultos: 1,
      tipo: 'Executiva',
    };

    const busca = this.formBuscaService.formularioValido
      ? this.formBuscaService.obterDadosBusca()
      : buscap;
    this.passagensService.getPassagens(busca).subscribe((res) => {
      console.log(res);
      this.passagens = res.resultado;
    });
  }

  busca(ev: DadosBusca) {
    this.passagensService.getPassagens(ev).subscribe((res) => {
      console.log(ev);
      this.passagens = res.resultado;
    });
  }
}
