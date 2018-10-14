import { Injectable, Output, EventEmitter } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { NewsItem } from './model/NewsItem';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  public static NEWS = 'news';

  @Output() newsUpdate = new EventEmitter< string >();

  public static getEndPointBase(): string {
    return (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
    ? 'http://localhost:8080/api/'
    : 'api/';
  }


  constructor() { }

  /**
   * returns NewsItem[]
   */
  public requestNews(): Promise<any> {
    const endpoint = NewsService.getEndPointBase() + NewsService.NEWS;

    console.log('requesting news: ' + endpoint);

    return axios.get(endpoint)
    .then((response: AxiosResponse<any>) => {
        console.log('received news');
        return response.data;

      })
      .catch(error => {
        console.log('error: ' + error);
        return [];
      });
  }

  public addNews(title: string, shortDescription: string) {
    const newsItem = this.createNewsItem(title, shortDescription);

    axios.post('/api/news', newsItem)
      .then( (response: AxiosResponse<any>) => {
        console.log('response after creating news: ' + response);
        return response;
      })
      .catch(error => {
        console.log(error);
        return [];
      });
  }

  private createNewsItem(title: string, shortDescription: string): NewsItem {
    return {
      id: -1,
      isRead: false,
      isFavourite: false,

      // content meta
      dateCreated: null,
      dateUpdated: null,
      dateStart: null,        // is displayed from this date until
      dateEnd: null,         // this date

      dateRead: null,
      seoDescription: '',
      sortOrder: '-1',

      // content
      title: title,                  // HTML
      shortDescription: shortDescription,       // HTML
      longDescription: 'loooong: ' + shortDescription,        // HTML
      thumbnail: null
    };
  }
}
