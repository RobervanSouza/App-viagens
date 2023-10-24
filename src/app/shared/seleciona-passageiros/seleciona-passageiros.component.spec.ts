import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionaPassageirosComponent } from './seleciona-passageiros.component';

describe('SelecionaPassageirosComponent', () => {
  let component: SelecionaPassageirosComponent;
  let fixture: ComponentFixture<SelecionaPassageirosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelecionaPassageirosComponent]
    });
    fixture = TestBed.createComponent(SelecionaPassageirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
