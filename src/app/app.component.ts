import { Component, OnInit } from '@angular/core';
import { NewsService } from './news-feed/services/news.service';
import { ImageService } from './news-feed/services/photo.service';
import ContextMenuConsts from './context-menu/ContextMenuConsts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private title = 'news-feed';



  constructor(private newsService: NewsService,
    private imageService: ImageService) {
    // enableProdMode();


  }

  ngOnInit() {

  }


  contextActionSelected(action) {
    console.log('on action selected: ' + action);

    switch (action) {
      case ContextMenuConsts.ACTION_DELETE:
      case ContextMenuConsts.ACTION_CLONE:
      case ContextMenuConsts.ACTION_MARK:
        console.log('context action selected: ' + action);
        // this.selectedTarget.action = action;
        break;
      default: console.log('undefined action: ' + action);
    }

    // console.log(this.selectedTarget);
  }

  
}
