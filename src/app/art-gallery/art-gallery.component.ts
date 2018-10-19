import { Component, OnInit } from '@angular/core';
import { Image } from './image-card/Image';
import { ImageService } from '../news-feed/services/photo.service';
import ContextActionTarget from '../context-menu/ContextActionTarget';

@Component({
  selector: 'app-art-gallery',
  templateUrl: './art-gallery.component.html',
  styleUrls: ['./art-gallery.component.css']
})
export class ArtGalleryComponent implements OnInit {

  public images: Image[];

  public selectedTarget: ContextActionTarget = {
    action: '',
    component: null
  };

  private imageCount = 30;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.getImages();
  }

  public componentSelected(comp: Component) {
    console.log(comp);

    this.target = comp;
  }

  public set target(targetComponent: Component) {
    this.selectedTarget.component = targetComponent;
    console.log(this.selectedTarget);
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
