import { Component } from '@angular/core';
import { PayerService } from './payer.service';
import { AllNewsService } from './all-news.service';
import { NewsService } from './news.service';
import { ChangesService } from './changes.service';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PayerService, AllNewsService, NewsService, ChangesService]
})
export class AppComponent {
  title = 'my-app';
  intervalNews = 20000;
  closeResult: string;
  constructor(public payerService: PayerService,
    public newsService: NewsService,
    public allNewsService: AllNewsService,
    public changesService: ChangesService,
    private modalService: NgbModal) {
      const newNews = new NewsService;
      this.allNewsService.pushNews(newNews.generateNews());
      this.allNewsService.lastNews(5);
      this.changesService.reactionNews(newNews.news, this.intervalNews);
    setInterval(() => {
      const newNews = new NewsService;
      this.allNewsService.pushNews(newNews.generateNews());
      this.allNewsService.lastNews(5);
      this.changesService.reactionNews(newNews.news, this.intervalNews);
    }, this.intervalNews);
    setInterval(() => {
      this.payerService.taxes();
   }, 5000);
  }


  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
