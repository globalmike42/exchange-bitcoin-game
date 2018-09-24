import { Component, OnInit } from '@angular/core';
import { PayerService } from '../payer.service';
import { ChangesService } from '../changes.service';

@Component({
  selector: 'app-miners',
  templateUrl: './miners.component.html',
  styleUrls: ['./miners.component.css'],
})
export class MinersComponent implements OnInit {

  public buyPrice;
  public sellPrice;
  constructor(public payerService: PayerService, public changesService: ChangesService) { }

  ngOnInit() {
    setInterval(() => {
      this.buyPrice = this.changesService.companys[1].cost + 100;
      this.sellPrice = this.changesService.companys[1].cost - 100;
    }, 0);
  }
}
