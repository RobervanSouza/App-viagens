import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocaoComponentComponent } from './promocao-component.component';

describe('PromocaoComponentComponent', () => {
  let component: PromocaoComponentComponent;
  let fixture: ComponentFixture<PromocaoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromocaoComponentComponent]
    });
    fixture = TestBed.createComponent(PromocaoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
