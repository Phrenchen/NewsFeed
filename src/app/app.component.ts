import { Component, OnInit } from '@angular/core';
import ContextMenuConsts from './context-menu/ContextMenuConsts';
import { Image } from './art-gallery/image-card/Image';
import ContextActionTarget from './context-menu/ContextActionTarget';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private static EMPTY = '';

  private title = 'news-feed';

  private selectedTarget: Component;

  constructor() {


  }

  ngOnInit() {
    // this.setupContextActions();
  }

  private executeContextAction(action: string) {
    if (this.selectedTarget !== null && action !== AppComponent.EMPTY) {
      console.log('executing action ' + action + ' on: ');
      console.log(this.selectedTarget);
    }
  }

  public itemSelected(item) {
      // setup promise
    this.selectedTarget = item !== this.selectedTarget ? item : null;
  }


  public contextActionSelected(action) {
    console.log('on action selected: ' + action);

    switch (action) {
      case ContextMenuConsts.ACTION_DELETE:
      case ContextMenuConsts.ACTION_CLONE:
      case ContextMenuConsts.ACTION_MARK:
        console.log('context action selected: ' + action);
        this.executeContextAction(action);
        break;
      default: console.log('undefined action: ' + action);
    }

    // console.log(this.selectedTarget);
  }
}
