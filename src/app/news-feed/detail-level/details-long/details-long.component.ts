import { Component, OnInit, Input, AfterViewInit, SecurityContext } from '@angular/core';
import { NewsItem } from '../../model/NewsItem';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-details-long',
  templateUrl: './details-long.component.html',
  styleUrls: ['./details-long.component.css']
})
export class DetailsLongComponent implements OnInit, AfterViewInit {

  @Input() news: NewsItem;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const contentContainer = document.querySelector('#long-stuff');
    if (contentContainer) {
      contentContainer.innerHTML = this.sanitizer.sanitize(SecurityContext.HTML, this.news.longDescription);
    }
  }

  public get hasImageList() {
    return this.news.images.length > 0;
  }
}
