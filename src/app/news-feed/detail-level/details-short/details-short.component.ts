import { Component, OnInit, Input } from '@angular/core';
import { NewsItem } from '../../model/NewsItem';

@Component({
  selector: 'app-details-short',
  templateUrl: './details-short.component.html',
  styleUrls: ['./details-short.component.css']
})
export class DetailsShortComponent implements OnInit {

  @Input() news: NewsItem;
  @Input() totalNewsCount = 1;

  constructor() { }

  ngOnInit() {
  }

}
