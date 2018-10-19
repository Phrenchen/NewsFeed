import { Component, OnInit } from '@angular/core';
import { Image } from './image-card/Image';
import { ImageService } from '../news-feed/services/photo.service';

@Component({
  selector: 'app-art-gallery',
  templateUrl: './art-gallery.component.html',
  styleUrls: ['./art-gallery.component.css']
})
export class ArtGalleryComponent implements OnInit {

  public images: Image[];

  private imageCount = 30;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.getImages();
  }

  private getImages = () => {
    console.log('get images');
    this.imageService.requestImages(this.imageCount)
      .then(result => {
        this.images = (result as Array<Image>).slice(0, this.imageCount);
        console.log('art gallery received: ' + this.images.length + ' / ' + result.length);
      });
  }
}
