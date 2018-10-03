import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { FeedBubbleComponent } from './news-feed/feed-bubble/feed-bubble.component';
import { TickerComponent } from './news-feed/ticker/ticker.component';
import { FavouriteBubbleComponent } from './news-feed/favourite-bubble/favourite-bubble.component';
import { NewsListComponent } from './news-feed/news-list/news-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsFeedComponent,
    FeedBubbleComponent,
    TickerComponent,
    FavouriteBubbleComponent,
    NewsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
