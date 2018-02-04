import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ReciboService } from '../../services/recibo.service';
import { Recibo } from '../../entity/recibo';

@Component({
  selector: 'app-recibo',
  templateUrl: './recibo.component.html',
  styleUrls: ['./recibo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReciboComponent implements OnInit {

  recibos: Recibo[];

  constructor(private reciboService: ReciboService) { }

  ngOnInit() {
    this.getRecibos();
  }

  removeRecibo(index: number) {
    let recibo: Recibo = this.recibos.splice(index, 1)[0];
    recibo.itens.forEach((item, i) => {
      console.log(i + " - " + item.produto.nome);
      recibo.removeItem(i);
    });
  }

  getRecibos() {
    this.recibos = this.reciboService.getRecibos();
  }
}
