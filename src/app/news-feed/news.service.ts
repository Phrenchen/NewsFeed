import { Injectable, Output, EventEmitter } from '@angular/core';
import axios, { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  @Output() newsUpdate = new EventEmitter< string >();

  constructor() { }

  /**
   * returns NewsItem[]
   */
  public requestNews(): Promise<any> {
    console.log('requesting news');
    return axios.get('/news')
    .then((response: AxiosResponse<any>) => {
        console.log('received news');
        return response.data;

      })
      .catch(error => {
        console.log(error);
        return [];
      });
  }
}
