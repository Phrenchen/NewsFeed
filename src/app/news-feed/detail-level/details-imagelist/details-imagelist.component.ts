import { Component, OnInit, Input } from '@angular/core';
import { NewsItem } from '../../model/NewsItem';

@Component({
  selector: 'app-details-imagelist',
  templateUrl: './details-imagelist.component.html',
  styleUrls: ['./details-imagelist.component.css']
})
export class DetailsImagelistComponent implements OnInit {

  @Input() news: NewsItem;

  constructor() { }

  ngOnInit() {
  }

  public get hasImageList() {
    return this.news.images.length > 0;
  }

}
