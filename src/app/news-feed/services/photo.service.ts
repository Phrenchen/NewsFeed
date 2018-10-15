import { Injectable } from '@angular/core';
import Axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ImageService {


  constructor() { }

  public requestImages(imageCount: number): Promise<any> {
    return fetch('https://jsonplaceholder.typicode.com/photos/')
    .then(response => response.json())
    .then(json => {
        return json;
    });
  }
}
