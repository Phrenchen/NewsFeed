import { Injectable, Output, EventEmitter } from '@angular/core';
import Axios, { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class MixcloudService {

  private static USER_THESNOOZE = 'thesnooze';

  private static CLOUD_CASTS = 'cloudcasts';
  private static META_DATA = '?metadata=1';


  constructor() { }

  public static getEndPointBase(user: string, requestName: string): string {
    return 'https://api.mixcloud.com/' + user + '/' + requestName + '/';
  }

  private getMetaData(): Promise<any> {
    const endpoint = MixcloudService.getEndPointBase(MixcloudService.USER_THESNOOZE, MixcloudService.META_DATA);

    return Axios.get(endpoint)
      .then((response: AxiosResponse<any>) => {
        return response.data;

      })
      .catch(error => {
        console.log('error: ' + error);
        return null;
      });
  }

  public async getNextCloudcastBatch(batchUrl: string): Promise<any> {
    return Axios.get(batchUrl)
      .then((response: AxiosResponse<any>) => {
        return response.data;
      })
      .catch(error => {
        console.log('error: ' + error);
        return null;
      });
  }

  public async getCloudcasts(): Promise<any> {
    const metaData = await this.getMetaData();

    let endpoint = MixcloudService.getEndPointBase(MixcloudService.USER_THESNOOZE, MixcloudService.CLOUD_CASTS);
    endpoint += '?limit=' + metaData.cloudcast_count;

    return Axios.get(endpoint)
      .then((response: AxiosResponse<any>) => {
        return response.data;
      })
      .catch(error => {
        console.log('error: ' + error);
        return null;
      });
  }
}
