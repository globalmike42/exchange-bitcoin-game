import { Component, OnInit } from '@angular/core';
import { PayerService } from '../payer.service';
import { ChangesService } from '../changes.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {

  public buyPrice;
  public sellPrice;
  constructor(public payerService: PayerService, public changesService: ChangesService) { }

  ngOnInit() {
    setInterval(() => {
      this.buyPrice = this.changesService.companys[0].cost + 100;
      this.sellPrice = this.changesService.companys[0].cost - 100;
    }, 0);
  }

}
