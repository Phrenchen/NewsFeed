import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { INewsItem } from '../model/NewsItemVO';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.css']
})
export class TickerComponent implements OnInit, OnChanges {

  @Input() news: INewsItem[];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log(this.news);
  }

}
