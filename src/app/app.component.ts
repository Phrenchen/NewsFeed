import { Component, enableProdMode, ChangeDetectorRef, OnInit, Output } from '@angular/core';
import { NewsFeedConsts } from './news-feed/model/NewsFeedConsts';
import { NewsService } from './news-feed/services/news.service';
import { ImageService } from './news-feed/services/photo.service';
import { Image } from './news-feed/model/Image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public images: Image[];
  
  private imageCount = 30;
  private title = 'news-feed';


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


  onActionSelected(action) {
    console.log('on action selected: ' + action);
    switch (action) {
      case NewsFeedConsts.ADD_NEWS:
      this.newsService.addNews('random new title', 'random short description');
        break;
      default: console.log('undefined action: ' + action);
    }
  }
}
