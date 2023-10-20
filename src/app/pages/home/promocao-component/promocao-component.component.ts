import { Component, OnInit } from '@angular/core';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { Promocao } from 'src/app/core/types/type';

@Component({
  selector: 'app-promocao-component',
  templateUrl: './promocao-component.component.html',
  styleUrls: ['./promocao-component.component.scss'],
})
export class PromocaoComponentComponent implements OnInit {
  promocoes!: Promocao[];
  constructor(private service: PromocaoService) {}
  ngOnInit(): void {
    this.service.listar().subscribe((res) => {
      this.promocoes = res;
    });
  }
}
