import { Component, OnInit } from '@angular/core';
import { MixcloudService } from './mixcloud.service';
import { Cloudcast, CloudcastBlob } from './model/Cloudcast';


@Component({
  selector: 'app-mixcloud',
  templateUrl: './mixcloud.component.html',
  styleUrls: ['./mixcloud.component.css']
})
export class MixcloudComponent implements OnInit {
  public cloudCastBlob: CloudcastBlob;

  constructor(private mixcloudService: MixcloudService) { }

  ngOnInit() {
    this.getCloudcasts();
  }

  private async getCloudcasts() {
    const cloudCastBlob = await this.mixcloudService.getCloudcasts();
    try {
      this.cloudCastBlob = cloudCastBlob;
      // console.log('cloudCastBlob: ' + cloudCastBlob.name);
    } catch (e) {
      console.log('failed assigning response to news array');
    }
  }
}