import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { NewsItem } from '../model/NewsItem';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.css']
})
export class TickerComponent implements OnInit, OnChanges {

  @Input() news: NewsItem[];

  @Output() itemClicked: EventEmitter<NewsItem> = new EventEmitter<NewsItem>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    // console.log(this.news);
  }


  tickerItemClicked(item: NewsItem): void {
    // console.log('ticker item clicked: ' + item.title);
    this.itemClicked.emit(item);
  }
}
