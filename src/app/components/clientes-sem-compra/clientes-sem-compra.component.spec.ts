import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesSemCompraComponent } from './clientes-sem-compra.component';

describe('ClientesSemCompraComponent', () => {
  let component: ClientesSemCompraComponent;
  let fixture: ComponentFixture<ClientesSemCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesSemCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesSemCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
