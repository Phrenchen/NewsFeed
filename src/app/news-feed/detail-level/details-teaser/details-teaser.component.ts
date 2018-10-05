import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, AfterViewInit } from '@angular/core';
import { NewsItem } from '../../model/NewsItem';

@Component({
  selector: 'app-details-teaser',
  templateUrl: './details-teaser.component.html',
  styleUrls: ['./details-teaser.component.css']
})
export class DetailsTeaserComponent implements OnInit {
  
  @Input() news: NewsItem;
  
  @Output() teaserClicked: EventEmitter<NewsItem> = new EventEmitter<NewsItem>();
  
  constructor() { }
  
  ngOnInit() {
  }

  onTeaserClick(): void {
    console.log('teaser clicked: ' + this.news.id);
    this.teaserClicked.emit(this.news);
  }

  public get hasThumbnail(): boolean {
    return this.news && this.news.thumbnail !== null;
  }

  public get thumbnail(): string {
    return this.news ? this.news.thumbnail : ' no thumb';
  }

  public get title(): string {
    return this.news ? this.news.title : 'no title';
  }

  public get shortDescription(): string {
    return this.news ? this.news.shortDescription : 'no short description';
  }

  public get longDescription(): string {
    return this.news ? this.news.longDescription : 'no long description';
  }
}
