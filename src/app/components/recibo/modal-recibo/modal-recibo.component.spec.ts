import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReciboComponent } from './modal-recibo.component';

describe('ModalReciboComponent', () => {
  let component: ModalReciboComponent;
  let fixture: ComponentFixture<ModalReciboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalReciboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalReciboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
