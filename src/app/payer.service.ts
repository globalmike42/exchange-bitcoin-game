import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PayerService {

  public cash = 200000;
  public bitcoin = 0;

  constructor() {
  }

  public buy(price) {
    if (this.cash >= price) {
      this.cash -= price;
      this.bitcoin++;
    }
  }
  public sell(price) {
    if (this.bitcoin > 0) {
      this.cash += price;
      this.bitcoin--;
    }
  }
  public taxes() {
    if (this.cash > 0) {
      this.cash -= 1000;
    }
  }
}
