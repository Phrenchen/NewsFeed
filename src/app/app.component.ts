import { Component, OnInit } from '@angular/core';
import { NewsFeedConsts } from './news-feed/model/NewsFeedConsts';
import { NewsService } from './news-feed/services/news.service';
import { ImageService } from './news-feed/services/photo.service';
import { Image } from './image-card/Image';
import ContextActionTarget from './context-menu/ContextActionTarget';
import ContextMenuConsts from './context-menu/ContextMenuConsts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public images: Image[];

  private imageCount = 30;
  private title = 'news-feed';

  // tagName is passed to context menu ('app-details-short', 'app-details-long',...)
  public selectedTarget: ContextActionTarget = {
    tagName: '',
    action: '',
    component: null
  };


  constructor(private newsService: NewsService,
    private imageService: ImageService) {
    // enableProdMode();

    setTimeout(this.getImages, 1000);
    // this.getImages();

  }

  ngOnInit() {

  }

  private getImages = () => {
    this.imageService.requestImages(this.imageCount)
      .then(result => {
        this.images = (result as Array<Image>).slice(0, this.imageCount);
      });

  }

  contextActionSelected(action) {
    console.log('on action selected: ' + action);

    switch (action) {
      case ContextMenuConsts.ACTION_DELETE:
      case ContextMenuConsts.ACTION_CLONE:
      case ContextMenuConsts.ACTION_MARK:
        console.log('context action selected: ' + action);
        this.selectedTarget.action = action;
        break;
      default: console.log('undefined action: ' + action);
    }

    console.log(this.selectedTarget);
  }

  public componentSelected(comp: Component) {
    console.log(comp);

    this.target = comp;
  }

  public set target(targetComponent: Component) {
    this.selectedTarget.component = targetComponent;
    console.log(this.selectedTarget);
  }
}
