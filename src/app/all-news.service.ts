import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllNewsService {

  public allNews = [];
  public lastNewses = [];

  constructor() { }

  public pushNews(news) {
    this.allNews.push(news);
  }
  public lastNews(value) {
    this.lastNewses = [];
    for (var i = 1; i < value; i++) {
      if (this.allNews.length - i < 0) break;
      this.lastNewses.push(this.allNews[this.allNews.length - i]);
    };
  }
}
