import { Injectable, Output, EventEmitter } from '@angular/core';
import { INewsItem } from './model/NewsItemVO';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  @Output() newsUpdate = new EventEmitter< string >();
 
  // replace with http request. promise?
  private news: INewsItem[] = [];

  constructor() { }

  public requestNews(): Promise<any> {
    return new Promise((resolve, reject) => {
      // http call
      // ...
      // parse result & resolve promise
      const responseData = [{
        'id': '1',
        'isRead': false,
        'isFavourite': true,

        // content meta
        dateCreated: new Date(),
        dateUpdated: new Date(),
        dateRead: new Date(),
        seoDescritpion: 'seo tags',
        sortOrder: 1,

        // content
        title: 'news title',                      // HTML
        shortDescription: 'short description',    // HTML
        longDescription: 'long description'       // HTML
      },
      {
        'id': '2',
        'isRead': false,
        'isFavourite': false,

        // content meta
        dateCreated: new Date(),
        dateUpdated: new Date(),
        dateRead: new Date(),
        seoDescritpion: 'seo tags',
        sortOrder: 2,

        // content
        title: 'news title',                      // HTML
        shortDescription: 'short description',    // HTML
        longDescription: 'long description'       // HTML
      },
      {
        'id': '3',
        'isRead': true,
        'isFavourite': false,

        // content meta
        dateCreated: new Date(),
        dateUpdated: new Date(),
        dateRead: new Date(),
        seoDescritpion: 'seo tags',
        sortOrder: 3,

        // content
        title: 'news title',                      // HTML
        shortDescription: 'short description',    // HTML
        longDescription: 'long description'       // HTML
      }
    ];
      // console.log('response received. ');

      resolve(responseData);

      // reject('reason: some error');
    });
  }
}
