import { Injectable, Output, EventEmitter } from '@angular/core';
import { Cloudcast, CloudcastBlob } from './model/Cloudcast';
import Axios, { AxiosResponse } from 'axios';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { forkJoin } from 'rxjs';  // change to new RxJS 6 import syntax

@Injectable({
  providedIn: 'root'
})
export class MixcloudService {

  private static USER_THESNOOZE = 'thesnooze';
  private static CLOUD_CASTS = 'cloudcasts';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(/*private http: HttpClient*/) { }

  public static getEndPointBase(user: string, requestName: string): string {
    return 'https://api.mixcloud.com/' + user + '/' + requestName + '/';
  }

  // public getCloudcasts(): void {
  //   const endpoint = MixcloudService.getEndPointBase(MixcloudService.USER_THESNOOZE, MixcloudService.CLOUD_CASTS);

  //   console.log('service called to get cloudcasts: ' + endpoint);

  //   const xhr = new XMLHttpRequest();
  //   // XHR for Chrome/Firefox/Opera/Safari.
  //   xhr.open('GET', endpoint, true);
  //   // xhr.setRequestHeader('Request-Method', 'GET');
  //   // xhr.setRequestHeader('Access-Control-Allow-Origin', 'https://localhost:4200');

  //   xhr.withCredentials = false;

  //   // Response handlers.
  //   xhr.onload = () => {
  //     const text = xhr.responseText;
  //     try {
  //       const cloudCastBlob: CloudcastBlob = JSON.parse(xhr.responseText);
  //     } catch (e) {
  //       console.log('received cloudcast answer but failed to parse json');
  //     }
  //   };

  //   xhr.onerror = (e) => {
  //     console.log('Woops, there was an error making the request.');
  //     console.log(e);
  //   };

  //   xhr.send();
  // }


  public getCloudcasts(): Promise<any> {
    const endpoint = MixcloudService.getEndPointBase(MixcloudService.USER_THESNOOZE, MixcloudService.CLOUD_CASTS);

    return Axios.get(endpoint)
    // return Axios.get(endpoint, config)
      .then((response: AxiosResponse<any>) => {
        return response.data;

      })
      .catch(error => {
        console.log('error: ' + error);
        return null;
      });
  }
}
