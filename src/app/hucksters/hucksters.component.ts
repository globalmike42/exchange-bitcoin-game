import { Component, OnInit } from '@angular/core';
import { PayerService } from '../payer.service';
import { ChangesService } from '../changes.service';

@Component({
  selector: 'app-hucksters',
  templateUrl: './hucksters.component.html',
  styleUrls: ['./hucksters.component.css'],
})
export class HuckstersComponent implements OnInit {

  public buyPrice;
  public sellPrice;
  constructor(public payerService: PayerService, public changesService: ChangesService) { }

  ngOnInit() {
    setInterval(() => {
      this.buyPrice = this.changesService.companys[2].cost + 100;
      this.sellPrice = this.changesService.companys[2].cost - 100;
    }, 0);
  }
}
