import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  public news = {
    company: null,
    trend: null,
    duration: null,
  };
  constructor() {
  }

  public generateNews() {
    this.news.company = Math.floor(Math.random() * 4);
    this.news.trend = (Math.floor(Math.random() * 2) === 0) ? -1 : 1;
    this.news.duration = Math.floor(Math.random() * 7) + 4;
    return this.news;
  }
}
