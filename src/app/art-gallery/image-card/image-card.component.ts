import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { Image } from './Image';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit, AfterViewInit {


  @Input() image: Image;

  @Output() selected: EventEmitter<Component> = new EventEmitter<Component>();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    document.querySelector('#card_' + this.image.id).addEventListener('click', e => {
      console.log(this as Component);
      this.selected.emit(this as Component);
    });
  }

}
