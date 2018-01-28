import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ReciboService } from '../../services/recibo.service';

@Component({
  selector: 'app-recibo',
  templateUrl: './recibo.component.html',
  styleUrls: ['./recibo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReciboComponent implements OnInit {

  constructor(private reciboService: ReciboService) { }

  ngOnInit() {
  }

  getRecibos() {
    return this.reciboService.getRecibos();
  }
}
