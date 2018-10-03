import { Injectable, Output, EventEmitter } from '@angular/core';
import { INewsItem } from './model/NewsItemVO';
import axios, { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  @Output() newsUpdate = new EventEmitter< string >();

  constructor() { }

  /**
   * returns INewsItem[]
   */
  public requestNews(): Promise<any> {
    return axios.get('http://127.0.0.1:3000/news')
      .then((response: AxiosResponse<any>) => {
        return response.data;

      })
      .catch(error => {
        console.log(error);
        return [];
      });
  }
}
