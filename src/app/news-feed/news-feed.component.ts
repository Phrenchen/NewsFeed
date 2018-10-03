import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from './news-service.service';
import { INewsItem } from './model/NewsItemVO';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  private news: INewsItem[] = [];

  private selectedItem: INewsItem = null;

  constructor(newsService: NewsServiceService) {
    newsService.requestNews()
      .then((result: INewsItem[]) => {
        console.log('received result: ');
        console.log(result);
        this.news = result;
      });
   }

  ngOnInit() {
  }

  public getUnreadFavouriteCount() {
    const unreadFavourites = this.news.filter( item => {
      return item.isFavourite && !item.isRead;
    });
    // console.log('unread favourites: ' + unreadFavourites.length);
    return unreadFavourites.length;
  }

  public getUnreadNewsCount() {
    const unreadNews = this.news.filter( item => {
      return !item.isRead;
    });
    // console.log('unread news: ' + unreadNews.length);
    return unreadNews.length;
  }

  public onTickerItemClicked(item: INewsItem) {
    console.log('news feed clicked: ' + item.id);
    this.selectedItem = this.selectedItem !== item ? item : null;
  }

  hasSelectedItem() {
    console.log('has selected item? ' + (this.selectedItem !== null) );
    return this.selectedItem !== null;
  }
}
