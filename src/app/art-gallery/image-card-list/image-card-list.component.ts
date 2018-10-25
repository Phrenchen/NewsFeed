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
  }

  public cardSeleced(comp: Component): void {
    // console.log(comp);
    this.imageSelected.emit(comp);

    const mql = window.matchMedia('(min-width: 600px)');
    if (mql.matches) {
      // media query passt
      console.log('media query active');
    }

    const mql1 = window.matchMedia('(min-width: 900px)');
    if (mql1.matches) {
      // media query passt
      console.log('1 media query active');
    }
  }
}
