import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-seleciona-passageiros',
  templateUrl: './seleciona-passageiros.component.html',
  styleUrls: ['./seleciona-passageiros.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelecionaPassageirosComponent),
      multi: true
    },
  ],
})
export class SelecionaPassageirosComponent implements ControlValueAccessor {
  @Input() titulo: string = '';
  @Input() subTitulo: string = '';

  value: number = 0
  onChange = (valor: number) => {}
  onTouch = () => {}

  writeValue(valor: any): void {
    this.value = valor;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onChange = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
   
  }

  incrementar() {
    this.value += 1;
    this.onChange(this.value);
    this.onTouch();
  }

  decrementar() {
    if (this.value > 0) {
      this.value -= 1;
      this.onChange(this.value);
      this.onTouch();
    }
  }
}
