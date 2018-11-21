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

  public selectedCast: Cloudcast;

  constructor(private mixcloudService: MixcloudService) { }

  ngOnInit() {
    if (!this.selectedCast) {
      this.getCloudcasts();

    }
  }

  public onImageClicked(selectedCloudcast: Cloudcast): void {
    console.log(selectedCloudcast);
    this.selectedCast = selectedCloudcast;
  }

  public closeOverlay(): void {
    this.selectedCast = null;
  }

  private async getCloudcasts() {
    // const debuggingLimit = 2;
    const cloudCastBlob = await this.mixcloudService.getCloudcasts();

    try {
      this.cloudCastBlob = cloudCastBlob;

      // TODO: preselect to initially show the overlay! disable!
      // this.selectedCast = this.cloudCastBlob.data[0];

      // TODO: while has nextBlob for more than 200 cloudcasts
      const nextBlobUrl = this.cloudCastBlob.paging['next'];
      if (nextBlobUrl) {
        const nextBlob = await this.mixcloudService.getNextCloudcastBatch(nextBlobUrl);
        this.cloudCastBlob.data = this.cloudCastBlob.data.concat(nextBlob.data);
      }

      // console.log('cloudCastBlob: ' + cloudCastBlob.name);
    } catch (e) {
      console.log('failed assigning response to news array');
    }
  }
}
