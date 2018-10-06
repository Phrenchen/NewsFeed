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
import { OktaService } from './shared/okta/okta.service';
import { NewsService } from './news-feed/news.service';

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
    ActionBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [OktaService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
