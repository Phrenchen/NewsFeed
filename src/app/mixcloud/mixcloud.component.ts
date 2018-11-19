import { Component, OnInit } from '@angular/core';
import { MixcloudService } from './mixcloud.service';
import { Cloudcast } from './model/Cloudcast';

@Component({
  selector: 'app-mixcloud',
  templateUrl: './mixcloud.component.html',
  styleUrls: ['./mixcloud.component.css']
})
export class MixcloudComponent implements OnInit {

  constructor(private mixcloudService: MixcloudService) { }

  ngOnInit() {
    this.getCloudcasts();
  }
  
  private async getCloudcasts() {
    const cloudCasts = this.mixcloudService.getCloudcasts();
  
    console.log('cloudcast count: ' + cloudCasts);

  }

}
