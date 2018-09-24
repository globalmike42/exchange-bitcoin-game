import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangesService {
  public realCost = 10000;
  public companys = [{ name: 'Биржа', cost: this.realCost },
    { name: 'Майнеры', cost: this.realCost },
    { name: 'Чёрный рынок', cost: this.realCost }];

  constructor() {
  }

  // public firstStepsGo(news, interval, steps) {
  //   setTimeout(() => {
  //     console.log(this.companys);
  //     console.log(this.realCost);
  //     this.companys[news.company].cost += (Math.floor(Math.random() * 400) + 100) * news.trend;
  //     this.realCost = this.companys[news.company].cost;
  //     if (steps !== 0) this.firstStepsGo(news, interval, steps-1);
  // }, interval);
  // }

  public reactionNews(news, interval) {
    const intervalChanges = interval / news.duration;
    let firstSteps = null;
    if (news.company !== 3) {
      firstSteps = Math.floor(Math.random() * (news.duration - 2)) + 1;
      for (var i = 1; i <= firstSteps; i++) {
        setTimeout(() => {
          // console.log(this.companys);
          this.companys[news.company].cost += (Math.floor(Math.random() * 400) + 100) * news.trend;
          this.realCost = this.companys[news.company].cost;
          if (this.realCost < 300) this.realCost = 300;
        }, intervalChanges*i);
      };
      // setTimeout(() => {
      // console.log(this.companys);
      // }, intervalChanges*8);

    }
    const lastSteps = news.duration - firstSteps;
    // console.log(firstSteps);
    setTimeout(() => {
      for (var i = 1; i <= lastSteps; i++) {
        setTimeout(() => {
          this.realCost += (Math.floor(Math.random() * 400) + 100) * news.trend;
          if (this.realCost < 300) this.realCost = 300;
          for (var i = 0; i < this.companys.length; i++) {
            this.companys[i].cost = this.realCost;
          };
          // console.log(this.companys);
        }, intervalChanges * i);
      };
    }, (intervalChanges * firstSteps));


  }
}
