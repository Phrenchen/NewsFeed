import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { INewsItem } from '../model/INewsItem';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.css']
})
export class TickerComponent implements OnInit, OnChanges {

  @Input() news: INewsItem[];

  @Output() itemClicked: EventEmitter<INewsItem> = new EventEmitter<INewsItem>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    // console.log(this.news);
  }


  tickerItemClicked(item: INewsItem): void {
    // console.log('ticker item clicked: ' + item.title);
    this.itemClicked.emit(item);
  }
}
