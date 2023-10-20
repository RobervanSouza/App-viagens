import { Component, Input, OnInit } from '@angular/core';
import { UnidadeFederativaService } from './../../../core/services/unidade-federativa/unidade-federativa.service';
import { UnidadeFederativa } from 'src/app/core/types/type';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
})
export class AutoCompleteComponent implements OnInit {
  @Input() label: string = '';
  @Input() icone: string = '';
  
  unidadesFederativas: UnidadeFederativa[] = [];

  filteredOption = [];

  constructor (private unidadeFederativaService: UnidadeFederativaService){
     
  }

  ngOnInit(): void {
      this.unidadeFederativaService.listar()
      .subscribe(dados => {
        this.unidadesFederativas = dados
        
      })
  }
}
