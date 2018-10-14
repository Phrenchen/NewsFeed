import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NewsFeedConsts } from '../model/NewsFeedConsts';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {

  @Output() actionSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onAddNews() {
    console.log('onAddNews');
    this.actionSelected.emit(NewsFeedConsts.ADD_NEWS);
  }

  onDeleteNews() {
    console.log('onDeleteNews');
    this.actionSelected.emit(NewsFeedConsts.DELETE_ALL_NEWS);
  }
}
