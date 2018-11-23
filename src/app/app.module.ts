import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, SafePipe } from './app.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { FeedBubbleComponent } from './news-feed/feed-bubble/feed-bubble.component';
import { TickerComponent } from './news-feed/ticker/ticker.component';
import { FavouriteBubbleComponent } from './news-feed/favourite-bubble/favourite-bubble.component';
import { DetailsShortComponent } from './news-feed/detail-level/details-short/details-short.component';
import { DetailsTeaserComponent } from './news-feed/detail-level/details-teaser/details-teaser.component';
import { DetailsLongComponent } from './news-feed/detail-level/details-long/details-long.component';
import { ActionBarComponent } from './news-feed/action-bar/action-bar.component';
import { NewsService } from './news-feed/services/news.service';
import { ImageService } from './news-feed/services/photo.service';
import { ImageCardComponent } from './image-card/image-card.component';
import { ImageCardListComponent } from './image-card-list/image-card-list.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { DetailsImagelistComponent } from './news-feed/detail-level/details-imagelist/details-imagelist.component';
import { ATestPageComponent } from './a-test-page/a-test-page.component';
import { MixcloudComponent } from './mixcloud/mixcloud.component';
import { MixcloudService } from './mixcloud/mixcloud.service';
import { HttpClientModule } from '@angular/common/http';
import { MixcloudOverlayComponent } from './mixcloud/mixcloud-overlay/mixcloud-overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsFeedComponent,
    FeedBubbleComponent,
    TickerComponent,
    FavouriteBubbleComponent,
    DetailsShortComponent,
    DetailsTeaserComponent,
    DetailsLongComponent,
    ActionBarComponent,
    ImageCardComponent,
    ImageCardListComponent,
    ContextMenuComponent,
    DetailsImagelistComponent,
    ATestPageComponent,
    MixcloudComponent,
    MixcloudOverlayComponent,
    SafePipe
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [NewsService, ImageService, MixcloudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
