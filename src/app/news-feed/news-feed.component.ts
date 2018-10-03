import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from './news-service.service';
import { INewsItem } from './model/INewsItem';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  private news: INewsItem[] = [];

  private selectedItem: INewsItem = null;

  constructor(private newsService: NewsServiceService) {
    this.getUsers();
  }

  ngOnInit() {
  }

  private async getUsers() {
    const response = await this.newsService.requestNews();
    console.log('received response');
    console.log(response);
    this.news = response;
  }

  public getUnreadFavouriteCount() {
    const unreadFavourites = this.news.filter( item => {
      return item.isFavourite && !item.isRead;
    });
    return unreadFavourites.length;
  }

  public getUnreadNewsCount() {
    const unreadNews = this.news.filter( item => {
      return !item.isRead;
    });
    return unreadNews.length;
  }

  public onTickerItemClicked(item: INewsItem) {
    this.selectedItem = (!this.selectedItem || this.selectedItem !== item) ? item : null;
  }

  hasSelectedItem() {
    return this.selectedItem !== null;
  }
}
