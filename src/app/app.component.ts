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
  private title = 'news-feed';


  public images: Image[];

  constructor(private newsService: NewsService,
    private imageService: ImageService) {
    // enableProdMode();

    setTimeout(this.getImages, 1000);
    // this.getImages();

  }

  ngOnInit() {

  }

  private getImages = () => {
    console.log('requesting images');
    const imageCount = 10;
    this.imageService.requestImages(imageCount)
      .then(result => {
        console.log('getImages: image count: ' + result.length);
        this.images = result;
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
