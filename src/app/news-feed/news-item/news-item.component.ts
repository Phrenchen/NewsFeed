import { Component, OnInit, Input } from '@angular/core';
import { INewsItem } from '../model/INewsItem';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {

  @Input() item: INewsItem;

  constructor() { }

  ngOnInit() {
  }

}
