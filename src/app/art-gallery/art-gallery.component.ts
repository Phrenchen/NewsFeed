import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Image } from './image-card/Image';
import { ImageService } from '../news-feed/services/photo.service';
import ContextActionTarget from '../context-menu/ContextActionTarget';
import { ImageCardComponent } from './image-card/image-card.component';

@Component({
  selector: 'app-art-gallery',
  templateUrl: './art-gallery.component.html',
  styleUrls: ['./art-gallery.component.css']
})
export class ArtGalleryComponent implements OnInit {

  @Output() itemSelected: EventEmitter<Image> = new EventEmitter<Image>();

  public images: Image[];
  public selectedImage: Image;



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
    this.itemSelected.emit(this.selectedImage);
  }

  public set target(targetComponent: Component) {
    this.selectedTarget.component = targetComponent;
    const newImage: Image = (this.selectedTarget.component as ImageCardComponent).image;
    this.selectedImage = newImage !== this.selectedImage ? newImage : null;
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
