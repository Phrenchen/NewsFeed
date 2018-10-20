import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../image-card/Image';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  @Input() image: Image;
  constructor() { }

  ngOnInit() {
    console.log()
  }

  

}
