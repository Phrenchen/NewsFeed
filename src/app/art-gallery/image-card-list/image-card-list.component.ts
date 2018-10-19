import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Image } from '../image-card/Image';

@Component({
  selector: 'app-image-card-list',
  templateUrl: './image-card-list.component.html',
  styleUrls: ['./image-card-list.component.css']
})
export class ImageCardListComponent implements OnInit {

  @Input() images: Image[] = [];

  @Output() imageSelected: EventEmitter<Component> = new EventEmitter<Component>();

  public imagesPerPage = 4;

  constructor() { }

  ngOnInit() {
    if (!this.images) {
      return;
    }
    console.log('image count: ' + this.images.length);
  }

  public cardSeleced(comp: Component): void {
    console.log(comp);
    this.imageSelected.emit(comp);

  }
}
