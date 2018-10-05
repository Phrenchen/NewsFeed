import { Component, OnInit, Input, SecurityContext, AfterViewInit } from '@angular/core';
import { NewsItem } from '../../model/NewsItem';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-details-short',
  templateUrl: './details-short.component.html',
  styleUrls: ['./details-short.component.css']
})
export class DetailsShortComponent implements OnInit, AfterViewInit {

  @Input() news: NewsItem;
  @Input() totalNewsCount = 1;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const shortDescription = this.sanitizer.sanitize(SecurityContext.HTML, this.news.shortDescription);
     document.querySelector('#title_' + this.news.id).innerHTML = this.sanitizer.sanitize(SecurityContext.HTML, this.news.title);

    const id: string = '#shortDescription_' + this.news.id;

    document.querySelector('#shortDescription_' + this.news.id).innerHTML =
      this.sanitizer.sanitize(SecurityContext.HTML, this.news.shortDescription);

  }
}
