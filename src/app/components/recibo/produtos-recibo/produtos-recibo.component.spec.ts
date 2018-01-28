import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosReciboComponent } from './produtos-recibo.component';

describe('ProdutosReciboComponent', () => {
  let component: ProdutosReciboComponent;
  let fixture: ComponentFixture<ProdutosReciboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutosReciboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosReciboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
