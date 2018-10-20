import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit, SecurityContext } from '@angular/core';
import { Image } from './Image';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit, AfterViewInit {


  @Input() image: Image;

  @Output() selected: EventEmitter<Component> = new EventEmitter<Component>();

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    document.querySelector('#card_' + this.image.id).addEventListener('click', e => {
      this.selected.emit(this as Component);
    });

    // document.querySelector('#long-stuff').innerHTML =
      // this.sanitizer.sanitize(SecurityContext.HTML, this.image.longDescription);
  }
}
