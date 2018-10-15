import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../model/Image';

@Component({
  selector: 'app-image-card-list',
  templateUrl: './image-card-list.component.html',
  styleUrls: ['./image-card-list.component.css']
})
export class ImageCardListComponent implements OnInit {

  @Input() images: Image[] = [];

  public imagesPerPage = 4;

  constructor() { }

  ngOnInit() {
    if (!this.images) {
      return;
    }
    console.log('image count: ' + this.images.length);
  }

}
