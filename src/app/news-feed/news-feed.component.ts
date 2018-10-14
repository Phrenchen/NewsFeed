import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';
import { NewsItem } from './model/NewsItem';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  public news: NewsItem[] = [];

  private selectedItem: NewsItem = null;
  private isLongVersionRequested = false;

  constructor(private newsService: NewsService) {
    this.getUsers();
  }

  ngOnInit() {
  }

  private async getUsers() {
    const response = await this.newsService.requestNews();
    // this.selectedItem = response[0];
    console.log('got users');
    try {
      this.news = response;
    } catch (e) {
      console.log('failed assigning response to news array');
      this.news = [];
    }
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

  public onTickerItemClick(item: NewsItem) {
    this.selectedItem = (this.selectedItem !== item) ? item : null;
    this.isLongVersionRequested = false;
  }

  onTeaserClick(item) {
    this.isLongVersionRequested = !this.isLongVersionRequested;
  }

  get showLongVersion(): boolean {
    return this.isLongVersionRequested;
  }

  get hasSelectedItem() {
    // console.log('selected item? ' + (this.selectedItem !== null));
    return this.selectedItem !== null;
  }
}
