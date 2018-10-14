import { Component, enableProdMode, ChangeDetectorRef, OnInit } from '@angular/core';
import { NewsFeedConsts } from './news-feed/model/NewsFeedConsts';
import { NewsService } from './news-feed/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'news-feed';
  user;


  constructor(private newsService: NewsService) {
    // enableProdMode();
  }

  ngOnInit() {
  }

  onActionSelected(action) {
    console.log('on action selected: ' + action);
    switch (action) {
      case NewsFeedConsts.ADD_NEWS:
      this.newsService.addNews('random new title', 'random short description');
        break;
      default: console.log('undefined action: ' + action);
    }
  }
}
