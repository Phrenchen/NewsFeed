import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
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
import { ArtGalleryComponent } from './art-gallery/art-gallery.component';

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
    ArtGalleryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NewsService, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
