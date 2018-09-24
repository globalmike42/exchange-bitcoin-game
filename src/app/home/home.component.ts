import { Component, OnInit } from '@angular/core';
import { AllNewsService } from '../all-news.service';
import { ChangesService } from '../changes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public lastNews;
  constructor(public allNewsService: AllNewsService, public changesService: ChangesService) {
  }


  ngOnInit() {

  }

}
