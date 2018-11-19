import { Injectable, Output, EventEmitter } from '@angular/core';
import { Cloudcast } from './model/Cloudcast';
import Axios, {AxiosResponse} from 'axios';

@Injectable({
  providedIn: 'root'
})
export class MixcloudService {

  private static USER_THESNOOZE = 'thesnooze';
  private static CLOUD_CASTS = 'cloudcasts';

  @Output() receivedCloudcasts = new EventEmitter<Cloudcast[]>();


  constructor() { }

  public static getEndPointBase(user: string, requestName: string): string {
    return 'https://api.mixcloud.com/' + user + '/' + requestName;
  }

  public getCloudcasts(): Promise<any> {
    const endpoint = MixcloudService.getEndPointBase(MixcloudService.USER_THESNOOZE, MixcloudService.CLOUD_CASTS);

    console.log('get cloudcasts');

    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods' : 'GET',
        'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type'
      }
    };

    // return Axios.get(endpoint)
    return Axios.get(endpoint, config)
    .then((response: AxiosResponse<any>) => {
        console.log('received cloudcasts');
        return response.data;
      })
      .catch(error => {
        console.log(error);
        return [];
      });
  }
}
